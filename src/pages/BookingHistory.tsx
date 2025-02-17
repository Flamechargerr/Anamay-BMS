
import { useAuth } from "@/context/AuthContext";
import { movies, theaters } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Ticket, Star } from "lucide-react";

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
        <p className="text-gray-600 mb-6">Start exploring movies and book your first show!</p>
        <Button asChild>
          <Link to="/">Book a Movie</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">My Bookings</h1>
        <Button asChild variant="outline">
          <Link to="/">Book More Movies</Link>
        </Button>
      </div>

      <div className="space-y-6">
        {user.bookings.map((booking) => {
          const movie = movies.find((m) => m.id === booking.movieId);
          const theater = theaters.find((t) => t.id === booking.theaterId);
          const show = theater?.showTimings.find((s) => s.id === booking.showTimingId);

          if (!movie || !theater || !show) return null;

          return (
            <div key={booking.id} className="glass-card p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-32 h-48 rounded-lg overflow-hidden">
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold">{movie.title}</h2>
                    <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-green-700" />
                      <span className="text-sm font-medium">{movie.rating}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{theater.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{show.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(booking.bookingDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Ticket className="w-4 h-4" />
                      <span>{booking.seats.join(", ")}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {movie.genre.map((g) => (
                      <span
                        key={g}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium"
                      >
                        {g}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <span className="text-sm text-gray-600">Amount Paid</span>
                      <p className="text-lg font-semibold">₹{booking.totalAmount}</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/movie/${movie.id}`}>View Movie</Link>
                    </Button>
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
