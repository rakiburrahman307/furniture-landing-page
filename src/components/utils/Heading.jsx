import PropTypes from "prop-types";

const Heading = ({ children }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='font-mochiy text-[30px] sm:text-[24px] md:text-[30px] capitalize'>
        {children}
      </h2>
      <div className='border-2 border-[#F56E07] w-16 mt-2'></div>
    </div>
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;
