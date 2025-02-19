
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
  },
  {
    id: "e3",
    title: "Premier League: Mumbai City FC vs Bengaluru FC",
    type: "sports",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2",
    date: "2024-06-10",
    time: "18:30",
    venue: {
      id: "v3",
      name: "Mumbai Football Arena",
      address: "789 Sports Complex",
      city: "Mumbai",
      capacity: 25000,
      parking: true,
      amenities: ["Food Stalls", "Fan Zones", "Sports Bar"]
    },
    description: "Watch the intense football match between Mumbai City FC and Bengaluru FC in the Premier League.",
    performers: [
      {
        id: "p3",
        name: "Mumbai City FC",
        type: "Football Team",
        imageUrl: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253"
      },
      {
        id: "p4",
        name: "Bengaluru FC",
        type: "Football Team",
        imageUrl: "https://images.unsplash.com/photo-1517466787929-bc90951d0974"
      }
    ],
    price: {
      min: 300,
      max: 2000
    },
    duration: "2 hours",
    categories: ["Sports", "Football"],
    tags: ["Premier League", "Football Match"],
    ratings: 4.7,
    totalReviews: 892
  },
  {
    id: "e4",
    title: "Wonderland Amusement Park Festival",
    type: "festival",
    imageUrl: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9",
    date: "2024-05-25",
    time: "10:00",
    venue: {
      id: "v4",
      name: "Wonderland Park",
      address: "321 Fantasy Lane",
      city: "Delhi",
      capacity: 10000,
      parking: true,
      amenities: ["Rides", "Games", "Food Courts", "Rest Areas"]
    },
    description: "Experience the thrill of over 50 rides, games, and attractions at the Wonderland Festival. Fun for the whole family!",
    performers: [], // Adding empty performers array as it's required by the type
    price: {
      min: 999,
      max: 1999
    },
    ageRestriction: "4+",
    duration: "12 hours",
    categories: ["Entertainment", "Family"],
    tags: ["Amusement Park", "Family Fun", "Rides"],
    ratings: 4.5,
    totalReviews: 1560
  },
  {
    id: "e5",
    title: "Summer Beach Party",
    type: "festival",
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    date: "2024-05-30",
    time: "16:00",
    venue: {
      id: "v5",
      name: "Juhu Beach",
      address: "Juhu Beach Road",
      city: "Mumbai",
      capacity: 5000,
      amenities: ["Beach Activities", "Food Stalls", "Dance Floor"]
    },
    description: "Join the biggest beach party of the summer featuring live DJs, beach games, and endless entertainment.",
    performers: [
      {
        id: "p5",
        name: "DJ Neptune",
        type: "DJ",
        imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
      }
    ],
    price: {
      min: 799,
      max: 1499
    },
    ageRestriction: "18+",
    duration: "6 hours",
    categories: ["Party", "Music"],
    tags: ["Beach Party", "DJ Night", "Summer Event"],
    ratings: 4.4,
    totalReviews: 723
  }
];
