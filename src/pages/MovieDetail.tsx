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
  View,
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
import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedFoodItems, setSelectedFoodItems] = useState<{[key: string]: number}>({});

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
    navigate(`/select-seats/${movie.id}/${theaterId}/${showId}`, {
      state: { selectedFoodItems }
    });
  };

  const addFoodItem = (itemId: string) => {
    setSelectedFoodItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
    toast({
      title: "Item added to cart",
      description: "You can modify quantities at checkout",
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
        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-between items-start">
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

          <div className="flex items-center gap-4">
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

          <div className="flex flex-wrap gap-2">
            {movie.genre.map((g) => (
              <span
                key={g}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {g}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">About the Movie</h2>
            <p className="text-gray-600 leading-relaxed">{movie.description}</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Director</h3>
                <p>{movie.director}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Language</h3>
                <p>{movie.language}</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Cast</h3>
              <div className="flex flex-wrap gap-2">
                {movie.cast?.map((actor) => (
                  <span key={actor} className="px-3 py-1 bg-primary/5 rounded-full text-sm">
                    {actor}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Video className="w-4 h-4" />
                  Virtual Screening
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Virtual Screening Experience</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={movie.virtualScreeningUrl} 
                      alt="Virtual Screening"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    Experience the movie in stunning virtual reality from the comfort of your home.
                    Includes access to exclusive behind-the-scenes content and director's commentary.
                  </p>
                  <Button className="w-full">Book Virtual Screening (₹299)</Button>
                </div>
              </DialogContent>
            </Dialog>

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
                  {movie.merchandise?.map((item) => (
                    <div key={item.id} className="bg-card p-4 rounded-lg">
                      <div className="aspect-square rounded-lg mb-2 overflow-hidden">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600">₹{item.price}</p>
                      <Button size="sm" className="w-full mt-2">Add to Cart</Button>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <h2 className="text-2xl font-semibold">Select Show</h2>
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
                        <View className="w-4 h-4" />
                        AR Seat Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>AR Seat Preview</DialogTitle>
                      </DialogHeader>
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <Canvas>
                          <OrbitControls />
                          <ambientLight intensity={0.5} />
                          <pointLight position={[10, 10, 10]} />
                          <mesh>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color="orange" />
                          </mesh>
                        </Canvas>
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
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => addFoodItem(item.id)}
                            >
                              Add {selectedFoodItems[item.id] ? `(${selectedFoodItems[item.id]})` : ''}
                            </Button>
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
