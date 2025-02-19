import { Movie, Theater, User, FoodItem } from "@/types";

export const movies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    posterUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    rating: 4.8,
    duration: "2h 28min",
    language: "English",
    releaseDate: "2024-03-15",
    genre: ["Action", "Sci-Fi", "Thriller"],
    ageRating: "U/A",
    description: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state.",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    director: "Christopher Nolan",
    isNFTAvailable: true,
    nftPrice: 999,
    virtualScreeningUrl: "https://example.com/virtual-tour/inception",
    merchandise: [
      {
        id: "m1",
        name: "Inception Totem Replica",
        price: 1999,
        description: "Perfect replica of the iconic totem",
        imageUrl: "https://images.unsplash.com/photo-1589999562311-56254d5d6697",
        available: true,
        category: "Collectibles"
      }
    ],
    demandMultiplier: 1.2,
    flashSale: {
      active: true,
      discount: 20,
      endsAt: "2024-03-16T23:59:59Z"
    }
  },
  {
    id: "2",
    title: "The Dark Knight",
    posterUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    rating: 4.9,
    duration: "2h 32min",
    language: "English",
    releaseDate: "2024-03-10",
    genre: ["Action", "Crime", "Drama"],
    ageRating: "U/A",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham.",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    director: "Christopher Nolan",
    isNFTAvailable: true,
    nftPrice: 1499
  },
  {
    id: "3",
    title: "Avatar: The Way of Water",
    posterUrl: "https://images.unsplash.com/photo-1599719500956-d158a26ab3ee",
    rating: 4.7,
    duration: "3h 12min",
    language: "English",
    releaseDate: "2024-03-20",
    genre: ["Action", "Adventure", "Fantasy"],
    ageRating: "U/A",
    description: "Return to Pandora in this epic adventure.",
    cast: ["Sam Worthington", "Zoe Saldana"],
    director: "James Cameron",
    isNFTAvailable: true,
    nftPrice: 1999
  },
  {
    id: "4",
    title: "The Matrix Resurrections",
    posterUrl: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42",
    rating: 4.5,
    duration: "2h 28min",
    language: "English",
    releaseDate: "2024-03-25",
    genre: ["Action", "Sci-Fi"],
    ageRating: "A",
    cast: ["Keanu Reeves", "Carrie-Anne Moss"],
    isNFTAvailable: true,
    nftPrice: 1299
  },
  {
    id: "5",
    title: "Dune: Part Two",
    posterUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    rating: 4.9,
    duration: "2h 45min",
    language: "English",
    releaseDate: "2024-03-18",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    ageRating: "U/A",
    cast: ["Timothée Chalamet", "Zendaya"],
    isNFTAvailable: true,
    nftPrice: 1699
  },
  {
    id: "6",
    title: "RRR",
    posterUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0",
    rating: 4.8,
    duration: "3h 2min",
    language: "Telugu",
    releaseDate: "2024-03-22",
    genre: ["Action", "Drama", "Historical"],
    ageRating: "U/A",
    cast: ["Ram Charan", "Jr NTR"],
    isNFTAvailable: true,
    nftPrice: 1499
  },
  {
    id: "7",
    title: "Pathaan",
    posterUrl: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65",
    rating: 4.6,
    duration: "2h 46min",
    language: "Hindi",
    releaseDate: "2024-03-28",
    genre: ["Action", "Thriller"],
    ageRating: "U/A",
    cast: ["Shah Rukh Khan", "Deepika Padukone"],
    isNFTAvailable: true,
    nftPrice: 1299
  },
  {
    id: "8",
    title: "KGF: Chapter 2",
    posterUrl: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434",
    rating: 4.7,
    duration: "2h 58min",
    language: "Kannada",
    releaseDate: "2024-03-12",
    genre: ["Action", "Drama"],
    ageRating: "U/A",
    cast: ["Yash", "Srinidhi Shetty"],
    isNFTAvailable: true,
    nftPrice: 1599
  },
  {
    id: "9",
    title: "Oppenheimer",
    posterUrl: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9",
    rating: 4.9,
    duration: "3h 0min",
    language: "English",
    releaseDate: "2024-03-30",
    genre: ["Drama", "Biography", "Historical"],
    ageRating: "A",
    cast: ["Cillian Murphy", "Emily Blunt"],
    director: "Christopher Nolan",
    isNFTAvailable: true,
    nftPrice: 1899
  },
  {
    id: "10",
    title: "Jawan",
    posterUrl: "https://images.unsplash.com/photo-1535868463750-c78d9543614f",
    rating: 4.5,
    duration: "2h 45min",
    language: "Hindi",
    releaseDate: "2024-03-16",
    genre: ["Action", "Thriller"],
    ageRating: "U/A",
    cast: ["Shah Rukh Khan", "Nayanthara"],
    isNFTAvailable: true,
    nftPrice: 1399
  }
];

export const foodMenu: FoodItem[] = [
  {
    id: "f1",
    name: "Classic Popcorn Combo",
    price: 299,
    category: "Combos",
    description: "Large popcorn with 2 soft drinks",
    imageUrl: "https://images.unsplash.com/photo-1585647347483-22b66260dfff",
    available: true,
    preparationTime: 5
  },
  {
    id: "f2",
    name: "Nachos Supreme",
    price: 249,
    category: "Snacks",
    description: "Loaded nachos with cheese sauce",
    imageUrl: "https://images.unsplash.com/photo-1573499973197-69278ff9d09a",
    available: true,
    preparationTime: 8
  },
  {
    id: "f3",
    name: "Gourmet Pizza",
    price: 399,
    category: "Premium",
    description: "Fresh-baked personal pizza",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    available: true,
    preparationTime: 15
  },
  {
    id: "f4",
    name: "Premium Burger Meal",
    price: 449,
    category: "Premium",
    description: "Gourmet burger with fries",
    imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398",
    available: true,
    preparationTime: 12
  }
];

export const theaters: Theater[] = [
  {
    id: "1",
    name: "PVR IMAX",
    location: "Downtown Mall",
    rating: 4.5,
    amenities: ["IMAX", "Dolby Atmos", "4K Projection", "Recliner Seats"],
    hasFood: true,
    foodMenu,
    virtualTourUrl: "https://example.com/virtual-tour/pvr-imax",
    showTimings: [
      {
        id: "st1",
        time: "10:00 AM",
        price: {
          standard: 200,
          premium: 400,
        },
        availability: 120,
        isFlashSale: true,
        flashSaleDiscount: 20,
        baseDemandMultiplier: 1.0
      }
    ]
  },
  {
    id: "2",
    name: "INOX Gold",
    location: "Phoenix Mall",
    rating: 4.7,
    amenities: ["Gold Lounge", "Recliner Seats", "Dolby Atmos"],
    hasFood: true,
    foodMenu: [
      {
        id: "f5",
        name: "Gourmet Platter",
        price: 599,
        category: "Premium",
        description: "Selection of premium snacks and beverages",
        imageUrl: "https://images.unsplash.com/photo-1621275471769-e6aa344546d5",
        available: true
      },
      {
        id: "f6",
        name: "Sushi Roll Set",
        price: 499,
        category: "Premium",
        description: "Assorted sushi rolls with wasabi",
        imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
        available: true
      }
    ],
    showTimings: [
      {
        id: "5",
        time: "11:30 AM",
        price: {
          standard: 280,
          premium: 450,
        },
        availability: 80
      },
      {
        id: "6",
        time: "3:30 PM",
        price: {
          standard: 300,
          premium: 500,
        },
        availability: 60
      }
    ]
  },
  {
    id: "3",
    name: "INOX Express",
    location: "Central Station",
    rating: 4.2,
    amenities: ["Quick Service", "Budget Friendly"],
    hasFood: true,
    foodMenu: [
      {
        id: "f7",
        name: "Express Combo",
        price: 199,
        category: "Combos",
        description: "Small popcorn and drink",
        imageUrl: "https://images.unsplash.com/photo-1589365252845-092198ba5534",
        available: true
      }
    ],
    showTimings: [
      {
        id: "7",
        time: "10:00 AM",
        price: {
          standard: 150,
          premium: 250,
        },
        availability: 100
      }
    ]
  }
];

export const mockUser: User = {
  id: "u1",
  name: "John Doe",
  email: "john@example.com",
  walletBalance: 5000,
  preferences: {
    genres: ["Action", "Sci-Fi"],
    languages: ["English", "Hindi"],
    theaters: ["1"],
    darkMode: false,
    notificationPreferences: {
      weatherAlerts: true,
      flashSales: true,
      friendActivity: true
    }
  },
  rewards: {
    points: 1500,
    tier: "Gold",
    benefits: [
      "Priority Booking",
      "No Convenience Fee",
      "Free Food Upgrades"
    ]
  },
  bookings: [],
  nftCollection: [],
  friends: ["u2", "u3"],
  savedPaymentMethods: [
    {
      id: "pm1",
      type: "card",
      label: "HDFC Credit Card",
      isDefault: true
    }
  ]
};
