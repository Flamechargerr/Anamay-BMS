
import { useParams, useNavigate } from "react-router-dom";
import { movies, theaters } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Star, Clock, Calendar } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleShowSelect = (theaterId: string, showId: string) => {
    if (!user) {
      toast({
        title: "Please login first",
        description: "You need to be logged in to book tickets",
        variant: "destructive",
      });
      return;
    }
    navigate(`/select-seats/${movie.id}/${theaterId}/${showId}`);
  };

  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="aspect-[2/3] rounded-lg overflow-hidden">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span>{movie.rating}/5</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-5 h-5" />
              <span>{movie.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-5 h-5" />
              <span>{movie.releaseDate}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genre.map((g) => (
              <span
                key={g}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {g}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-semibold mb-4">Select Show</h2>
          <div className="space-y-6">
            {theaters.map((theater) => (
              <div
                key={theater.id}
                className="glass-card p-6 rounded-lg space-y-4"
              >
                <div>
                  <h3 className="text-xl font-semibold">{theater.name}</h3>
                  <p className="text-sm text-gray-600">{theater.location}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {theater.showTimings.map((show) => (
                    <Button
                      key={show.id}
                      variant="outline"
                      onClick={() => handleShowSelect(theater.id, show.id)}
                      className="relative"
                    >
                      {show.time}
                      {show.isFlashSale && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          {show.flashSaleDiscount}% off
                        </span>
                      )}
                    </Button>
                  ))}
                </div>
                {theater.hasFood && (
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Pre-order Food & Beverages</h4>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {theater.foodMenu?.map((item) => (
                        <div key={item.id} className="flex-shrink-0 w-48 bg-white rounded-lg p-3 shadow">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-32 object-cover rounded-lg mb-2"
                          />
                          <h5 className="font-medium">{item.name}</h5>
                          <p className="text-sm text-gray-600">{item.description}</p>
                          <p className="font-medium mt-2">₹{item.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
