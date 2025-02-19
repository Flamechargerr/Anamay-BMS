
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold">
              ShowTime
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/events"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Events
              </Link>
              <Link
                to="/movies"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Movies
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/bookings">
                  <Button variant="ghost">My Bookings</Button>
                </Link>
                <Button variant="ghost" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
