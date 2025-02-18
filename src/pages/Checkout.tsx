
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

  const { movieId, theaterId, showId, selectedSeats, totalAmount, selectedFoodItems } = location.state || {};

  const movie = movies.find((m) => m.id === movieId);
  const theater = theaters.find((t) => t.id === theaterId);
  const show = theater?.showTimings.find((s) => s.id === showId);

  if (!movie || !theater || !show || !selectedSeats || !user) {
    return <div>Invalid checkout session</div>;
  }

  const getFoodTotal = () => {
    if (!selectedFoodItems) return 0;
    return Object.entries(selectedFoodItems).reduce((total, [itemId, quantity]) => {
      const item = theater.foodMenu?.find(f => f.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const foodTotal = getFoodTotal();
  const finalTotal = totalAmount + foodTotal;

  const handlePayment = () => {
    if (user.walletBalance < finalTotal) {
      toast({
        title: "Insufficient balance",
        description: "Please add more money to your wallet",
        variant: "destructive",
      });
      return;
    }

    const newBalance = user.walletBalance - finalTotal;
    updateWalletBalance(newBalance);

    const foodOrders = selectedFoodItems ? Object.entries(selectedFoodItems).map(([itemId, quantity]) => ({
      itemId,
      quantity,
    })) : [];

    const booking = {
      id: uuidv4(),
      movieId,
      theaterId,
      showTimingId: showId,
      seats: selectedSeats,
      totalAmount: finalTotal,
      foodOrders,
      bookingDate: new Date().toISOString(),
      status: "confirmed"
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
                <span className="font-medium">Ticket Amount:</span> ₹{totalAmount}
              </p>
              {selectedFoodItems && Object.keys(selectedFoodItems).length > 0 && (
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Food & Beverages</h3>
                  <div className="space-y-2">
                    {Object.entries(selectedFoodItems).map(([itemId, quantity]) => {
                      const item = theater.foodMenu?.find(f => f.id === itemId);
                      if (!item) return null;
                      return (
                        <div key={itemId} className="flex justify-between">
                          <span>{item.name} x {quantity}</span>
                          <span>₹{item.price * quantity}</span>
                        </div>
                      );
                    })}
                    <div className="border-t pt-2">
                      <span className="font-medium">Food Total:</span> ₹{foodTotal}
                    </div>
                  </div>
                </div>
              )}
              <div className="border-t pt-2 mt-4">
                <p className="text-lg font-semibold">
                  <span>Final Total:</span> ₹{finalTotal}
                </p>
              </div>
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
