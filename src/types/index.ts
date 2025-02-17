
export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  rating: number;
  duration: string;
  language: string;
  releaseDate: string;
  genre: string[];
  ageRating?: "U" | "U/A" | "A";
  description?: string;
  cast?: string[];
  director?: string;
  reviews?: Review[];
  isNFTAvailable?: boolean;
  nftPrice?: number;
}

export interface Theater {
  id: string;
  name: string;
  location: string;
  showTimings: ShowTiming[];
  amenities?: string[];
  rating?: number;
  reviews?: Review[];
  hasFood?: boolean;
  foodMenu?: FoodItem[];
  seatMap?: {
    rows: number;
    columns: number;
    premium: string[];
    standard: string[];
  };
}

export interface ShowTiming {
  id: string;
  time: string;
  price: {
    standard: number;
    premium: number;
  };
  availability: number;
  isFlashSale?: boolean;
  flashSaleDiscount?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  walletBalance: number;
  bookings: Booking[];
  preferences?: {
    genres: string[];
    languages: string[];
    theaters: string[];
  };
  rewards?: {
    points: number;
    tier: "Bronze" | "Silver" | "Gold" | "Platinum";
  };
  nftCollection?: NFTTicket[];
  darkMode?: boolean;
}

export interface Booking {
  id: string;
  movieId: string;
  theaterId: string;
  showTimingId: string;
  seats: string[];
  totalAmount: number;
  bookingDate: string;
  qrCode?: string;
  isNFT?: boolean;
  foodOrders?: FoodOrder[];
  splitPayments?: SplitPayment[];
  status: "confirmed" | "cancelled" | "completed";
}

export interface Seat {
  id: string;
  row: string;
  number: number;
  type: "standard" | "premium";
  status: "available" | "taken" | "selected";
  rating?: number;
  reviews?: Review[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  likes?: number;
}

export interface NFTTicket {
  id: string;
  bookingId: string;
  movieId: string;
  tokenId: string;
  imageUrl: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  transferable: boolean;
}

export interface FoodItem {
  id: string;
  name: string;
  price: number;
  category: "Snacks" | "Beverages" | "Combos";
  description: string;
  imageUrl: string;
  available: boolean;
}

export interface FoodOrder {
  id: string;
  items: { itemId: string; quantity: number }[];
  totalAmount: number;
  status: "pending" | "confirmed" | "ready";
}

export interface SplitPayment {
  userId: string;
  amount: number;
  status: "pending" | "paid";
  paymentLink: string;
}
