
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { movies, theaters } from "@/data/mockData";
import { v4 as uuidv4 } from "uuid";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, updateWalletBalance } = useAuth();
  const { toast } = useToast();

  const { movieId, theaterId, showId, selectedSeats, totalAmount } = location.state || {};

  const movie = movies.find((m) => m.id === movieId);
  const theater = theaters.find((t) => t.id === theaterId);
  const show = theater?.showTimings.find((s) => s.id === showId);

  if (!movie || !theater || !show || !selectedSeats || !user) {
    return <div>Invalid checkout session</div>;
  }

  const handlePayment = () => {
    if (user.walletBalance < totalAmount) {
      toast({
        title: "Insufficient balance",
        description: "Please add more money to your wallet",
        variant: "destructive",
      });
      return;
    }

    const newBalance = user.walletBalance - totalAmount;
    updateWalletBalance(newBalance);

    const booking = {
      id: uuidv4(),
      movieId,
      theaterId,
      showTimingId: showId,
      seats: selectedSeats,
      totalAmount,
      bookingDate: new Date().toISOString(),
    };

    const updatedUser = {
      ...user,
      bookings: [...user.bookings, booking],
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));

    toast({
      title: "Booking confirmed!",
      description: "Your tickets have been bo

If there's knowledge, context or custom instructions you want to include in every edit in this project, set it below.

<lov-actions>
<lov-knowledge>
</lov-actions>

This project requires robust backend functionality for user authentication, payment gateway integration, movie data management, seat allocation, and potentially other features.  You'll definitely want to use the Supabase menu on the top right to connect your project to Supabase.
<lov-actions>
<lov-message-prompt message="Tell me more about Supabase">Learn more about Supabase</lov-message-prompt>
</lov-actions>
