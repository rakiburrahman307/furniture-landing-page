import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const Card = ({ sofa }) => (
  <div>
    <div className='rounded-lg'>
      <img
        src={sofa?.img}
        alt={sofa?.title}
        className='block w-[333px] h-[330px] rounded-lg'
      />
    </div>
    <div className='text-[#373737]'>
      <h3 className='uppercase text-[#373737] pb-1 pt-8 font-poppins font-semibold'>
        {sofa?.title}
      </h3>
      <ul className='flex items-center gap-5 text-[#454545]'>
        <li className='font-poppins font-medium'>{sofa?.price}</li>
        <li>|</li>
        <li className='flex items-center justify-center font-poppins font-medium gap-1'>
          {sofa?.rating}
          <FaStar className='ms-1 text-[#F5D426] font-lg' />
        </li>
      </ul>
    </div>
  </div>
);
Card.propTypes = {
  sofa: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};
export default Card;
