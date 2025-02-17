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
  },
  {
    id: "3",
    title: "Interstellar",
    posterUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    rating: 4.7,
    duration: "2h 49min",
    language: "English",
    releaseDate: "2024-03-20",
    genre: ["Adventure", "Drama", "Sci-Fi"],
  },
  {
    id: "4",
    title: "Dune: Part Two",
    posterUrl: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2",
    rating: 4.6,
    duration: "2h 46min",
    language: "English",
    releaseDate: "2024-03-01",
    genre: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    id: "5",
    title: "The Matrix Resurrections",
    posterUrl: "https://images.unsplash.com/photo-1485163819542-13adeb5e0068",
    rating: 4.2,
    duration: "2h 28min",
    language: "English",
    releaseDate: "2024-03-05",
    genre: ["Action", "Sci-Fi"],
  },
  {
    id: "6",
    title: "Avatar: The Way of Water",
    posterUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    rating: 4.5,
    duration: "3h 12min",
    language: "English",
    releaseDate: "2024-03-08",
    genre: ["Action", "Adventure", "Fantasy"],
  },
];

export const theaters: Theater[] = [
  {
    id: "1",
    name: "PVR Cinemas",
    location: "Downtown Mall",
    showTimings: [
      {
        id: "1",
        time: "10:00 AM",
        price: {
          standard: 200,
          premium: 400,
        },
      },
      {
        id: "2",
        time: "1:30 PM",
        price: {
          standard: 200,
          premium: 400,
        },
      },
      {
        id: "3",
        time: "6:30 PM",
        price: {
          standard: 250,
          premium: 450,
        },
      },
    ],
  },
  {
    id: "2",
    name: "INOX",
    location: "City Center",
    showTimings: [
      {
        id: "4",
        time: "11:00 AM",
        price: {
          standard: 180,
          premium: 380,
        },
      },
      {
        id: "5",
        time: "2:30 PM",
        price: {
          standard: 180,
          premium: 380,
        },
      },
      {
        id: "6",
        time: "7:30 PM",
        price: {
          standard: 220,
          premium: 420,
        },
      },
    ],
  },
];

export const mockUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  walletBalance: 1000,
  bookings: [],
};
