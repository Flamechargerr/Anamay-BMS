
import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background p-6 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">Anamay's BMS</h1>
        <p className="text-gray-600">Book your favorite movies at the best prices</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Movie grid will be implemented here */}
        <p className="text-gray-600 col-span-full text-center py-8">Coming soon...</p>
      </div>
    </div>
  );
};

export default Movies;
