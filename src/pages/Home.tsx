
import { Link } from "react-router-dom";
import { movies } from "@/data/mockData";
import { Star } from "lucide-react";

const Home = () => {
  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8">Now Showing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            <div className="aspect-[2/3] overflow-hidden rounded-lg">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </div>
            <div className="p-4 glass-card mt-2 rounded-lg">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg">{movie.title}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{movie.rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{movie.duration}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {movie.genre.map((g) => (
                  <span
                    key={g}
                    className="px-2 py-1 bg-gray-100 rounded-full text-xs"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
