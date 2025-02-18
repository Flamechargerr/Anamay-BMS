
import { Movie, Theater, User } from "@/types";

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
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    director: "Christopher Nolan",
    isNFTAvailable: true,
    nftPrice: 999
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
    posterUrl: "https://images.unsplash.com/photo-1547496614-55be5b68708f",
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
    posterUrl: "https://images.unsplash.com/photo-1594736797993-0325b58ad7da",
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
    posterUrl: "https://images.unsplash.com/photo-1594736797934-5d4cd8a86451",
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

export const theaters: Theater[] = [
  {
    id: "1",
    name: "PVR IMAX",
    location: "Downtown Mall",
    rating: 4.5,
    amenities: ["IMAX", "Dolby Atmos", "4K Projection", "Recliner Seats"],
    hasFood: true,
    foodMenu: [
      {
        id: "f1",
        name: "Popcorn Combo",
        price: 350,
        category: "Combos",
        description: "Large popcorn with 2 soft drinks",
        imageUrl: "https://images.unsplash.com/photo-1585647347483-22b66260dfff",
        available: true
      },
      {
        id: "f2",
        name: "Nachos Grande",
        price: 250,
        category: "Snacks",
        description: "Nachos with cheese sauce and salsa",
        imageUrl: "https://images.unsplash.com/photo-1585647347483-22b66260dfff",
        available: true
      },
      {
        id: "f3",
        name: "Movie Special Combo",
        price: 599,
        category: "Combos",
        description: "2 Medium Popcorn, 2 Coke, 1 Nachos",
        imageUrl: "https://images.unsplash.com/photo-1585647347483-22b66260dfff",
        available: true
      }
    ],
    showTimings: [
      {
        id: "1",
        time: "10:00 AM",
        price: {
          standard: 200,
          premium: 400,
        },
        availability: 120,
        isFlashSale: true,
        flashSaleDiscount: 20
      },
      {
        id: "2",
        time: "1:30 PM",
        price: {
          standard: 200,
          premium: 400,
        },
        availability: 85
      },
      {
        id: "3",
        time: "6:30 PM",
        price: {
          standard: 250,
          premium: 450,
        },
        availability: 45,
        isFlashSale: true,
        flashSaleDiscount: 15
      }
    ],
    seatMap: {
      rows: 10,
      columns: 12,
      premium: ["A", "B", "C"],
      standard: ["D", "E", "F", "G", "H", "I", "J"]
    }
  },
  {
    id: "2",
    name: "INOX Multiplex",
    location: "City Center Mall",
    rating: 4.3,
    amenities: ["Dolby Sound", "4K Projection", "Food Court"],
    hasFood: true,
    foodMenu: [
      {
        id: "f4",
        name: "Burger Combo",
        price: 399,
        category: "Combos",
        description: "Burger, Fries, and Coke",
        imageUrl: "https://images.unsplash.com/photo-1585647347483-22b66260dfff",
        available: true
      }
    ],
    showTimings: [
      {
        id: "4",
        time: "11:00 AM",
        price: {
          standard: 180,
          premium: 350,
        },
        availability: 100,
        isFlashSale: true,
        flashSaleDiscount: 25
      }
    ],
    seatMap: {
      rows: 8,
      columns: 10,
      premium: ["A", "B"],
      standard: ["C", "D", "E", "F", "G", "H"]
    }
  }
];

export const mockUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  walletBalance: 1000,
  preferences: {
    genres: ["Action", "Sci-Fi"],
    languages: ["English", "Hindi"],
    theaters: ["1"]
  },
  rewards: {
    points: 1500,
    tier: "Gold"
  },
  darkMode: false,
  bookings: [
    {
      id: "booking1",
      movieId: "1",
      theaterId: "1",
      showTimingId: "1",
      seats: ["A1", "A2"],
      totalAmount: 400,
      bookingDate: "2024-03-10T10:00:00Z",
      qrCode: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
      status: "confirmed",
      foodOrders: [
        {
          id: "fo1",
          items: [{ itemId: "f1", quantity: 1 }],
          totalAmount: 350,
          status: "confirmed"
        }
      ]
    },
    {
      id: "booking2",
      movieId: "2",
      theaterId: "2",
      showTimingId: "4",
      seats: ["B3", "B4"],
      totalAmount: 360,
      bookingDate: "2024-03-12T14:30:00Z",
      qrCode: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
      status: "confirmed",
      isNFT: true
    }
  ],
  nftCollection: [
    {
      id: "nft1",
      bookingId: "booking2",
      movieId: "2",
      tokenId: "0x123",
      imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      rarity: "Rare",
      transferable: true
    }
  ]
};
