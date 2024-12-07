import ReactStars from "react-rating-stars-component";

const Rating = ({rating}) => {
    return (
        <div className="flex justify-start items-center gap-5">
           <ReactStars
    count={5}
    onChange={rating}
    size={24}
    activeColor="#ffd700"
  />
  <p>({rating})</p>
            
        </div>
    );
};

export default Rating;