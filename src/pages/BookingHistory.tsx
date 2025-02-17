
import { useAuth } from "@/context/AuthContext";
import { movies, theaters } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BookingHistory = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Please login to view your bookings</h1>
        <Button asChild>
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    );
  }

  if (user.bookings.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">No bookings found</h1>
        <Button asChild>
          <Link to="/">Book a Movie</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
      <div className="space-y-6">
        {user.bookings.map((booking) => {
          const movie = movies.find((m) => m.id === booking.movieId);
          const theater = theaters.find((t) => t.id === booking.theaterId);
          const show = theater?.showTimings.find((s) => s.id === booking.showTimingId);

          if (!movie || !theater || !show) return null;

          return (
            <div key={booking.id} className="glass-card p-6 rounded-lg">
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
                      <span className="font-medium">Seats:</span> {booking.seats.join(", ")}
                    </p>
                    <p>
                      <span className="font-medium">Amount Paid:</span> ₹{booking.totalAmount}
                    </p>
                    <p>
                      <span className="font-medium">Booking Date:</span>{" "}
                      {new Date(booking.bookingDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingHistory;
