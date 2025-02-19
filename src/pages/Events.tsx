
import { useState } from "react";
import { Link } from "react-router-dom";
import { events } from "@/data/mockEvents";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Filter,
  Music,
  Mic,
  Theatre,
  Trophy,
  Festival
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const getEventIcon = (type: string) => {
  switch (type) {
    case "concert":
      return <Music className="w-4 h-4" />;
    case "comedy":
      return <Mic className="w-4 h-4" />;
    case "theatre":
      return <Theatre className="w-4 h-4" />;
    case "sports":
      return <Trophy className="w-4 h-4" />;
    case "festival":
      return <Festival className="w-4 h-4" />;
    default:
      return <Music className="w-4 h-4" />;
  }
};

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const eventTypes = ["concert", "comedy", "theatre", "sports", "festival"];
  const cities = Array.from(new Set(events.map(event => event.venue.city))).sort();

  const filteredEvents = events.filter(event => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.performers.some(performer => 
        performer.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesType = selectedType ? event.type === selectedType : true;
    const matchesCity = selectedCity ? event.venue.city === selectedCity : true;
    return matchesSearch && matchesType && matchesCity;
  });

  return (
    <div className="animate-fadeIn">
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background p-6 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">Discover Events</h1>
        <p className="text-gray-600">Find the best events happening in your city</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search events, artists, venues..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Event Type</DropdownMenuLabel>
              <DropdownMenuGroup>
                {eventTypes.map((type) => (
                  <DropdownMenuItem
                    key={type}
                    onClick={() => setSelectedType(selectedType === type ? null : type)}
                    className={selectedType === type ? "bg-primary/10" : ""}
                  >
                    {getEventIcon(type)}
                    <span className="ml-2 capitalize">{type}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>City</DropdownMenuLabel>
              <DropdownMenuGroup>
                {cities.map((city) => (
                  <DropdownMenuItem
                    key={city}
                    onClick={() => setSelectedCity(selectedCity === city ? null : city)}
                    className={selectedCity === city ? "bg-primary/10" : ""}
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="ml-2">{city}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        {selectedType && (
          <Badge variant="secondary" className="gap-1">
            {getEventIcon(selectedType)}
            <span className="capitalize">{selectedType}</span>
            <button
              onClick={() => setSelectedType(null)}
              className="ml-1 hover:text-primary"
            >
              ×
            </button>
          </Badge>
        )}
        {selectedCity && (
          <Badge variant="secondary" className="gap-1">
            <MapPin className="w-4 h-4" />
            {selectedCity}
            <button
              onClick={() => setSelectedCity(null)}
              className="ml-1 hover:text-primary"
            >
              ×
            </button>
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <Link to={`/event/${event.id}`} key={event.id} className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {event.isNFTAvailable && (
                  <div className="absolute top-2 right-2 bg-primary/90 text-white px-2 py-1 rounded text-xs font-medium">
                    NFT Available
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Badge variant="outline" className="gap-1">
                    {getEventIcon(event.type)}
                    <span className="capitalize">{event.type}</span>
                  </Badge>
                  {event.ageRestriction && (
                    <Badge variant="outline">{event.ageRestriction}</Badge>
                  )}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{event.venue.name}, {event.venue.city}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {event.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="text-sm">
                  <span className="font-medium">₹{event.price.min}</span>
                  {event.price.max > event.price.min && (
                    <span className="text-gray-500"> onwards</span>
                  )}
                </div>
                <Button size="sm">Book Now</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No events found</h2>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default Events;
