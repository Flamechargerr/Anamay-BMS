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
  virtualScreeningUrl?: string;
  merchandise?: Merchandise[];
  weatherSensitive?: boolean;
  currentWeather?: WeatherInfo;
  demandMultiplier?: number;
  flashSale?: {
    active: boolean;
    discount: number;
    endsAt: string;
  };
}

export interface WeatherInfo {
  condition: "sunny" | "rainy" | "cloudy";
  temperature: number;
  forecast: string;
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
  virtualTourUrl?: string;
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
  baseDemandMultiplier?: number;
}

export interface FoodItem {
  id: string;
  name: string;
  price: number;
  category: "Snacks" | "Beverages" | "Combos" | "Premium" | "Meals";
  description: string;
  imageUrl: string;
  available: boolean;
  preparationTime?: number;
}

export interface Merchandise {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  available?: boolean;
  category?: string;
  sizes?: string[];
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
    darkMode?: boolean;
    notificationPreferences?: {
      weatherAlerts: boolean;
      flashSales: boolean;
      friendActivity: boolean;
    };
  };
  rewards?: {
    points: number;
    tier: "Bronze" | "Silver" | "Gold" | "Platinum";
    benefits: string[];
  };
  nftCollection?: NFTTicket[];
  friends?: string[];
  savedPaymentMethods?: PaymentMethod[];
}

export interface PaymentMethod {
  id: string;
  type: "card" | "upi" | "wallet";
  label: string;
  isDefault?: boolean;
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
