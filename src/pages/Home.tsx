import { useState } from "react";
import { Link } from "react-router-dom";
import { movies } from "@/data/mockData";
import { Star, Clock, Calendar, MapPin, Ticket, TrendingUp, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  // Get unique genres, languages, and formats from all movies
  const allGenres = Array.from(new Set(movies.flatMap((movie) => movie.genre))).sort();
  const allLanguages = Array.from(new Set(movies.map((movie) => movie.language))).sort();
  const allFormats = ["2D", "3D", "IMAX", "4DX"];

  // Filter movies based on search query and selected filters
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         movie.cast?.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         movie.director?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre ? movie.genre.includes(selectedGenre) : true;
    const matchesLanguage = selectedLanguage ? movie.language === selectedLanguage : true;
    return matchesSearch && matchesGenre && matchesLanguage;
  });

  return (
    <div className="animate-fadeIn">
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background p-6 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">Anamay's BMS - Book Movie Tickets</h1>
        <p className="text-gray-600">Watch the latest movies in your favorite theaters</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search movies, actors, directors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Genres</DropdownMenuLabel>
              <DropdownMenuGroup>
                {allGenres.map((genre) => (
                  <DropdownMenuItem
                    key={genre}
                    onClick={() => setSelectedGenre(selectedGenre === genre ? null : genre)}
                    className={selectedGenre === genre ? "bg-primary/10" : ""}
                  >
                    {genre}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Languages</DropdownMenuLabel>
              <DropdownMenuGroup>
                {allLanguages.map((language) => (
                  <DropdownMenuItem
                    key={language}
                    onClick={() => setSelectedLanguage(selectedLanguage === language ? null : language)}
                    className={selectedLanguage === language ? "bg-primary/10" : ""}
                  >
                    {language}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        {selectedGenre && (
          <div className="px-3 py-1 bg-primary/10 rounded-full text-sm flex items-center gap-2">
            Genre: {selectedGenre}
            <button onClick={() => setSelectedGenre(null)} className="hover:text-primary">×</button>
          </div>
        )}
        {selectedLanguage && (
          <div className="px-3 py-1 bg-primary/10 rounded-full text-sm flex items-center gap-2">
            Language: {selectedLanguage}
            <button onClick={() => setSelectedLanguage(null)} className="hover:text-primary">×</button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="group">
            <div className="movie-card bg-card hover:shadow-lg transition-all duration-300">
              <div className="aspect-[2/3] overflow-hidden rounded-t-lg relative">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {movie.isNFTAvailable && (
                  <div className="absolute top-2 right-2 bg-primary/90 text-white px-2 py-1 rounded text-xs font-medium">
                    NFT Available
                  </div>
                )}
                {movie.ageRating && (
                  <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                    {movie.ageRating}
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {movie.title}
                  </h3>
                  <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded">
                    <Star className="w-4 h-4 fill-green-700" />
                    <span className="text-sm font-medium">{movie.rating}</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{movie.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(movie.releaseDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{movie.language}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {movie.genre.map((g) => (
                    <span
                      key={g}
                      className="px-2 py-1 bg-gray-100 rounded-full text-xs"
                    >
                      {g}
                    </span>
                  ))}
                </div>
                <Button className="w-full mt-4 gap-2">
                  <Ticket className="w-4 h-4" />
                  Book Now
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No movies found</h2>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default Home;
