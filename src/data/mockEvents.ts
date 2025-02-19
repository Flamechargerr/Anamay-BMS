
import { Event } from "@/types";

export const events: Event[] = [
  {
    id: "e1",
    title: "Ed Sheeran World Tour",
    type: "concert",
    imageUrl: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14",
    date: "2024-05-15",
    time: "19:30",
    venue: {
      id: "v1",
      name: "National Stadium",
      address: "123 Stadium Road",
      city: "Mumbai",
      capacity: 60000,
      parking: true,
      amenities: ["Food Court", "VIP Lounges", "Merchandise Stores"]
    },
    description: "Ed Sheeran brings his '+ - = ÷ x' Tour to India for an unforgettable night of music.",
    performers: [
      {
        id: "p1",
        name: "Ed Sheeran",
        imageUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
        type: "Singer-Songwriter",
        socialLinks: {
          instagram: "edsheeran",
          twitter: "edsheeran"
        }
      }
    ],
    price: {
      min: 2500,
      max: 12000
    },
    ageRestriction: "12+",
    duration: "2.5 hours",
    categories: ["Pop", "Live Music"],
    tags: ["International Artist", "Live Concert"],
    isNFTAvailable: true,
    nftPrice: 999,
    ratings: 4.8,
    totalReviews: 1250
  },
  {
    id: "e2",
    title: "Comedy Night with Vir Das",
    type: "comedy",
    imageUrl: "https://images.unsplash.com/photo-1527224857830-43a7acc85260",
    date: "2024-04-20",
    time: "20:00",
    venue: {
      id: "v2",
      name: "The Comedy Club",
      address: "45 Fun Street",
      city: "Bangalore",
      capacity: 500,
      amenities: ["Full Bar", "Food Service"]
    },
    description: "Award-winning comedian Vir Das returns with his new stand-up special.",
    performers: [
      {
        id: "p2",
        name: "Vir Das",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        type: "Comedian",
        socialLinks: {
          instagram: "virdas",
          twitter: "thevirdas"
        }
      }
    ],
    price: {
      min: 799,
      max: 1499
    },
    ageRestriction: "16+",
    duration: "1.5 hours",
    categories: ["Stand-up Comedy", "Entertainment"],
    tags: ["Comedy", "Stand-up"],
    ratings: 4.6,
    totalReviews: 328
  }
];
