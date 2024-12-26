import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";

const MobileSidebar = ({ isOpen, setIsOpen }) => {
  const handleSidebarClose = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { label: "Home", link: "#" },
    { label: "Shop", link: "#" },
    { label: "Features", link: "#" },
    { label: "Contact", link: "#" },
    { label: "Login", link: "#" },
  ];

  return (
    <div
      className={`fixed z-[100] inset-0 bg-black/20 backdrop-blur-sm min-h-screen duration-500 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={handleSidebarClose}
    >
      <div
        className={`absolute min-h-full w-80 right-0 top-0 min-w-52 rounded-lg bg-white pb-5 text-center drop-shadow-2xl transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between items-center px-5 my-5'>
          <h1 className='text-sm font-semibold text-customTextColor'>
            Timber <span className='text-black'>Trove</span>
          </h1>
          <IoMdClose onClick={handleSidebarClose} size={25} />
        </div>
        <ul className='mt-4 w-full'>
          {menuItems.map((item, index) => (
            <li key={index} className='py-2'>
              <a
                href={item.link}
                className='block py-2 px-4 w-full rounded-lg hover:bg-gray-400 hover:text-green-500 transition-colors duration-300'
                onClick={handleSidebarClose}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MobileSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MobileSidebar;
