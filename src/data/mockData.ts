
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
    nftPrice: 999,
    reviews: [
      {
        id: "r1",
        userId: "u1",
        userName: "MovieBuff123",
        rating: 5,
        comment: "Mind-bending masterpiece!",
        date: "2024-03-10",
        likes: 45
      }
    ]
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
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    director: "Christopher Nolan",
    isNFTAvailable: true,
    nftPrice: 1499,
    reviews: [
      {
        id: "r2",
        userId: "u2",
        userName: "DCFanatic",
        rating: 5,
        comment: "Heath Ledger's performance is legendary!",
        date: "2024-03-08",
        likes: 67
      }
    ]
  }
];

export const theaters: Theater[] = [
  {
    id: "1",
    name: "PVR Cinemas",
    location: "Downtown Mall",
    rating: 4.5,
    amenities: ["Dolby Atmos", "4K Projection", "Recliner Seats"],
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
        availability: 45
      }
    ],
    seatMap: {
      rows: 10,
      columns: 12,
      premium: ["A", "B", "C"],
      standard: ["D", "E", "F", "G", "H", "I", "J"]
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
