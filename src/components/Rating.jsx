import ReactStars from "react-rating-stars-component";

const Rating = ({rating}) => {
    return (
        <div className="flex justify-start items-center gap-5">
           <ReactStars
    count={5}
    value={rating}
    size={30}
    activeColor="#ffd700"
    isHalf={true}
    edit={false}
  />
  <p>({rating})</p>
            
        </div>
    );
};

export default Rating;