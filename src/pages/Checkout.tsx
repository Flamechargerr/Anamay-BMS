
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { movies, theaters } from "@/data/mockData";
import { v4 as uuidv4 } from "uuid";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, updateWalletBalance } = useAuth();
  const { toast } = useToast();

  const { movieId, theaterId, showId, selectedSeats, totalAmount } = location.state || {};

  const movie = movies.find((m) => m.id === movieId);
  const theater = theaters.find((t) => t.id === theaterId);
  const show = theater?.showTimings.find((s) => s.id === showId);

  if (!movie || !theater || !show || !selectedSeats || !user) {
    return <div>Invalid checkout session</div>;
  }

  const handlePayment = () => {
    if (user.walletBalance < totalAmount) {
      toast({
        title: "Insufficient balance",
        description: "Please add more money to your wallet",
        variant: "destructive",
      });
      return;
    }

    const newBalance = user.walletBalance - totalAmount;
    updateWalletBalance(newBalance);

    const booking = {
      id: uuidv4(),
      movieId,
      theaterId,
      showTimingId: showId,
      seats: selectedSeats,
      totalAmount,
      bookingDate: new Date().toISOString(),
    };

    const updatedUser = {
      ...user,
      bookings: [...user.bookings, booking],
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));

    toast({
      title: "Booking confirmed!",
      description: "Your tickets have been booked successfully!",
    });

    navigate("/bookings");
  };

  return (
    <div className="max-w-2xl mx-auto animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="glass-card p-6 rounded-lg space-y-6">
        <div className="flex items-start gap-6">
          <div className="w-32 h-48 rounded-lg overflow-hidden">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
            <p className="text-gray-600 mb-4">
              {theater.name} • {show.time}
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Selected Seats:</span>{" "}
                {selectedSeats.join(", ")}
              </p>
              <p>
                <span className="font-medium">Amount to Pay:</span> ₹{totalAmount}
              </p>
              <p>
                <span className="font-medium">Wallet Balance:</span> ₹
                {user.walletBalance}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handlePayment}>Confirm Payment</Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
