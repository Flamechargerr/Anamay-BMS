
import { useParams } from "react-router-dom";
import { events } from "@/data/mockEvents";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users,
  Ticket,
  Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src={event.imageUrl} 
            alt={event.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="gap-1">
              {event.type}
            </Badge>
            {event.ageRestriction && (
              <Badge variant="outline">{event.ageRestriction}</Badge>
            )}
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>{new Date(event.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>{event.venue.name}, {event.venue.city}</span>
            </div>
            {event.venue.capacity && (
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5" />
                <span>Capacity: {event.venue.capacity.toLocaleString()} people</span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">About This Event</h2>
            <p className="text-gray-600">{event.description}</p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-gray-500">Price starting from</p>
              <p className="text-2xl font-bold">₹{event.price.min}</p>
            </div>
            {event.ratings && (
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">{event.ratings}</span>
                <span className="text-gray-500">({event.totalReviews} reviews)</span>
              </div>
            )}
          </div>

          <Button className="w-full gap-2">
            <Ticket className="w-4 h-4" />
            Book Tickets
          </Button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Event Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {event.performers && event.performers.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Performers</h3>
                <div className="space-y-4">
                  {event.performers.map(performer => (
                    <div key={performer.id} className="flex items-center gap-4">
                      <img 
                        src={performer.imageUrl} 
                        alt={performer.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{performer.name}</p>
                        <p className="text-sm text-gray-500">{performer.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Venue Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {event.venue.amenities?.map((amenity, index) => (
                  <Badge key={index} variant="secondary">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
