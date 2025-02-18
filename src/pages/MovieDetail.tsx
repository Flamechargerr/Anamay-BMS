
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movies, theaters } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Clock, 
  Calendar, 
  Users, 
  Video, 
  Gift, 
  Crown,
  Share2,
  Ticket,
  Coffee,
  ShoppingBag,
  View3d,
  Trophy
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedTheater, setSelectedTheater] = useState<string | null>(null);

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

  const handleGroupBooking = () => {
    toast({
      title: "Group Booking Initiated",
      description: "Share the link with your friends to book together!",
    });
  };

  const handleVirtualScreening = () => {
    toast({
      title: "Virtual Screening Access",
      description: "You'll receive the link 30 minutes before the show.",
    });
  };

  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="aspect-[2/3] rounded-lg overflow-hidden relative group">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          {movie.isNFTAvailable && (
            <div className="absolute bottom-4 left-4 right-4">
              <Button className="w-full gap-2" variant="default">
                <Gift className="w-4 h-4" />
                Get NFT Ticket (₹{movie.nftPrice})
              </Button>
            </div>
          )}
        </div>
        <div className="md:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            {user?.rewards && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                      <Trophy className="w-4 h-4" />
                      <span>{user.rewards.points} points</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Earn 50 points for each ticket!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

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

          <div className="flex flex-wrap gap-3 mb-8">
            <Button onClick={handleGroupBooking} variant="outline" className="gap-2">
              <Users className="w-4 h-4" />
              Group Booking
            </Button>
            <Button variant="outline" className="gap-2">
              <Video className="w-4 h-4" />
              Virtual Screening
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Movie Merchandise
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Official Movie Merchandise</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-card p-4 rounded-lg">
                      <div className="aspect-square bg-gray-100 rounded-lg mb-2"></div>
                      <h4 className="font-medium">Collector's T-Shirt</h4>
                      <p className="text-sm text-gray-600">₹599</p>
                      <Button size="sm" className="w-full mt-2">Add to Cart</Button>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Select Show</h2>
          <div className="space-y-6">
            {theaters.map((theater) => (
              <div
                key={theater.id}
                className="glass-card p-6 rounded-lg space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      {theater.name}
                      {theater.rating && (
                        <span className="text-sm bg-green-50 text-green-700 px-2 py-1 rounded">
                          ⭐ {theater.rating}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-600">{theater.location}</p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2">
                        <View3d className="w-4 h-4" />
                        AR Seat Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>AR Seat Preview</DialogTitle>
                      </DialogHeader>
                      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">AR View Coming Soon</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {theater.amenities && (
                  <div className="flex flex-wrap gap-2">
                    {theater.amenities.map((amenity) => (
                      <span key={amenity} className="text-xs bg-primary/5 text-primary px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>
                )}

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
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Coffee className="w-4 h-4" />
                      Pre-order Food & Beverages
                    </h4>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {theater.foodMenu?.map((item) => (
                        <div key={item.id} className="flex-shrink-0 w-48 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-32 object-cover rounded-lg mb-2"
                          />
                          <h5 className="font-medium">{item.name}</h5>
                          <p className="text-sm text-gray-600">{item.description}</p>
                          <div className="flex justify-between items-center mt-2">
                            <p className="font-medium">₹{item.price}</p>
                            <Button size="sm" variant="outline">Add</Button>
                          </div>
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
