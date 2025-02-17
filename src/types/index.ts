
export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  rating: number;
  duration: string;
  language: string;
  releaseDate: string;
  genre: string[];
}

export interface Theater {
  id: string;
  name: string;
  location: string;
  showTimings: ShowTiming[];
}

export interface ShowTiming {
  id: string;
  time: string;
  price: {
    standard: number;
    premium: number;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  walletBalance: number;
  bookings: Booking[];
}

export interface Booking {
  id: string;
  movieId: string;
  theaterId: string;
  showTimingId: string;
  seats: string[];
  totalAmount: number;
  bookingDate: string;
}

export interface Seat {
  id: string;
  row: string;
  number: number;
  type: "standard" | "premium";
  status: "available" | "taken" | "selected";
}
