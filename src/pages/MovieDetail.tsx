
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Movie Details</h1>
      <p className="text-gray-600">Coming soon...</p>
    </div>
  );
};

export default MovieDetail;
