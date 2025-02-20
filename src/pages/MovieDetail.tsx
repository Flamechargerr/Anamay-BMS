
import { useParams, useNavigate } from "react-router-dom";
import { movies } from "@/data/mockData";
import { 
  Calendar, 
  Clock, 
  Star,
  Ticket,
  Info
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const movie = movies.find(m => m.id === id);

  if (!movie) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Movie not found</h1>
      </div>
    );
  }

  const handleBooking = () => {
    toast({
      title: "Booking Initiated",
      description: `Booking request for ${movie.title} has been received.`,
      duration: 3000,
    });
    navigate("/bookings");
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src={movie.posterUrl} 
            alt={movie.title}
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genre.map((g, index) => (
              <Badge key={index} variant="secondary">
                {g}
              </Badge>
            ))}
            {movie.ageRating && (
              <Badge variant="outline">{movie.ageRating}</Badge>
            )}
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>Duration: {movie.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Info className="w-5 h-5" />
              <span>Language: {movie.language}</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">About This Movie</h2>
            <p className="text-gray-600">{movie.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Cast & Crew</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Director:</span> {movie.director}</p>
              <p><span className="font-medium">Cast:</span> {movie.cast.join(", ")}</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold">{movie.rating}/10</span>
            </div>
          </div>

          <Button onClick={handleBooking} className="w-full gap-2">
            <Ticket className="w-4 h-4" />
            Book Tickets
          </Button>
        </div>
      </div>

      {movie.format && (
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Available Formats</h3>
            <div className="flex flex-wrap gap-2">
              {movie.format.map((format, index) => (
                <Badge key={index} variant="secondary">
                  {format}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MovieDetail;
