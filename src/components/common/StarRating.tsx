import { IoStarSharp } from "react-icons/io5";
import { IoStarHalfSharp } from "react-icons/io5";

type RatingProps = {
  rating: number;
  showText?: boolean;
};

const StarRating: React.FC<RatingProps> = ({ rating, showText }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 && rating % 1 < 1;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="text-lg flex items-center space-x-2">
      <div className="flex items-center">
        {Array.from({ length: fullStars }, (_, i) => (
          <IoStarSharp size={15} key={`full-${i}`} className="text-black" />
        ))}
        {halfStar && <IoStarHalfSharp size={15} className="text-black" />}
        {Array.from({ length: emptyStars }, (_, i) => (
          <IoStarSharp size={15} key={`empty-${i}`} className="text-gray-300" />
        ))}
      </div>
      <span className="text-sm">
        ({rating} {showText && "reviews"})
      </span>
    </div>
  );
};

export default StarRating;
