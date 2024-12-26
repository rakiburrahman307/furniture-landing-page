import image1 from "../../assets/images/image4.jpeg";
import image2 from "../../assets/images/image5.jpeg";
import image3 from "../../assets/images/image6.jpeg";

const LoungeChar = () => {
  return (
    <section className="max-w-[1425px] mx-auto px-4 sm:px-6 md:mt-20 mt-24">
      <div className="flex flex-wrap gap-6 sm:gap-20 justify-center">
        {/* First Card */}
        <div className="w-full sm:w-[404px] h-[250px] sm:h-[368px] rounded-lg relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={image3}
            alt="Lounge Chair"
          />
          <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-4 text-black">
            <p className="text-sm sm:text-base font-robotoSerif font-medium">
              Hot Product
            </p>
            <p className="text-lg sm:text-[24px] font-mochiy">Lounge Chair</p>
            <p className="text-sm sm:text-base font-robotoSerif font-medium">
              Shop now
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-full sm:w-[404px] h-[250px] sm:h-[368px] rounded-lg overflow-hidden my-10">
          <img
            className="w-full h-full object-cover"
            src={image2}
            alt="Lounge Chair"
          />
        </div>

        {/* Third Card */}
        <div className="w-full sm:w-[404px] h-[250px] sm:h-[368px] rounded-lg relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={image1}
            alt="Lounge Chair"
          />
          <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-4 text-black">
            <p className="text-sm sm:text-base font-robotoSerif font-medium">
              Hot Product
            </p>
            <p className="text-lg sm:text-[24px] font-mochiy">Lounge Chair</p>
            <p className="text-sm sm:text-base font-robotoSerif font-medium">
              Shop now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoungeChar;
