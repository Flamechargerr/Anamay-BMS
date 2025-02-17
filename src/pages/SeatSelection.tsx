
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { movies, theaters } from "@/data/mockData";
import { useToast } from "@/components/ui/use-toast";

const ROWS = ["A", "B", "C", "D", "E", "F", "G"];
const SEATS_PER_ROW = 12;

const generateSeats = () => {
  const seats = [];
  for (const row of ROWS) {
    for (let i = 1; i <= SEATS_PER_ROW; i++) {
      seats.push({
        id: `${row}${i}`,
        row,
        number: i,
        type: row < "D" ? "premium" : "standard",
        status: Math.random() > 0.8 ? "taken" : "available",
      });
    }
  }
  return seats;
};

const SeatSelection = () => {
  const { movieId, theaterId, showId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const movie = movies.find((m) => m.id === movieId);
  const theater = theaters.find((t) => t.id === theaterId);
  const show = theater?.showTimings.find((s) => s.id === showId);

  const seats = generateSeats();

  if (!movie || !theater || !show) {
    return <div>Invalid selection</div>;
  }

  const handleSeatClick = (seatId: string, status: string, type: string) => {
    if (status === "taken") return;

    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((id) => id !== seatId);
      }
      if (prev.length >= 10) {
        toast({
          title: "Maximum seats reached",
          description: "You can only select up to 10 seats",
          variant: "destructive",
        });
        return prev;
      }
      return [...prev, seatId];
    });
  };

  const calculateTotal = () => {
    const premiumCount = selectedSeats.filter((seatId) => {
      const seat = seats.find((s) => s.id === seatId);
      return seat?.type === "premium";
    }).length;
    const standardCount = selectedSeats.length - premiumCount;
    return premiumCount * show.price.premium + standardCount * show.price.standard;
  };

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      toast({
        title: "No seats selected",
        description: "Please select at least one seat to continue",
        variant: "destructive",
      });
      return;
    }
    navigate("/checkout", {
      state: {
        movieId,
        theaterId,
        showId,
        selectedSeats,
        totalAmount: calculateTotal(),
      },
    });
  };

  return (
    <div className="animate-fadeIn max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-600">
          {theater.name} • {show.time}
        </p>
      </div>

      <div className="glass-card p-8 rounded-lg">
        <div className="w-full overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="w-3/4 h-8 bg-gray-300 mx-auto mb-12 rounded-sm">
              <p className="text-center text-sm text-gray-600">Screen</p>
            </div>

            <div className="grid grid-cols-12 gap-2 mb-8">
              {seats.map((seat) => (
                <button
                  key={seat.id}
                  className={`seat ${
                    seat.status === "taken"
                      ? "seat-taken"
                      : selectedSeats.includes(seat.id)
                      ? "seat-selected"
                      : "seat-available"
                  }`}
                  onClick={() => handleSeatClick(seat.id, seat.status, seat.type)}
                >
                  <span className="text-xs">
                    {seat.row}
                    {seat.number}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="seat-available seat w-6 h-6" />
                <span className="text-sm">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="seat-selected seat w-6 h-6" />
                <span className="text-sm">Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="seat-taken seat w-6 h-6" />
                <span className="text-sm">Taken</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Selected Seats:</p>
                <p className="font-medium">
                  {selectedSeats.length > 0
                    ? selectedSeats.join(", ")
                    : "None selected"}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Total Amount:</p>
                <p className="text-xl font-bold">₹{calculateTotal()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <Button onClick={handleProceed} disabled={selectedSeats.length === 0}>
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
};

export default SeatSelection;
