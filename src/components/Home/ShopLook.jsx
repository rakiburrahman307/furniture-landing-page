import Circle from '../../assets/images/ShopLook/upCircle.png';
import bg from '../../assets/images/ShopLook/ShopLookBG.png';

const ShopLook = () => {
  return (
    <section
      className="h-[400px] md:h-[500px] lg:h-[806px] w-full bg-cover bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-center max-w-[800px] relative">
        <a
          href="#"
          className="inline-block text-white text-lg md:text-3xl font-bold md:py-4 md:px-16 py-2 px-8 bg-[#FF6F00] rounded-lg capitalize duration-300 hover:bg-slate-700"
        >
          Shop the Look
        </a>
        <div className="relative">
          <h2 className="capitalize font-bold text-[80px] leading-[120px] md:text-[190px] md:leading-[285px] font-poppins text-white">
            Kitchen
          </h2>
          <img
            src={Circle}
            alt="Decorative Circle"
            className="absolute -top-5 w-10 left-20 lg:left-28 lg:w-auto"
          />
          <img
            src={Circle}
            alt="Decorative Circle"
            className="absolute bottom-6 w-10 right-8 lg:right-[-60px] lg:w-auto"
          />
        </div>
        <p className="font-bold md:text-3xl text-xl text-white px-8 md:px-28 md:leading-[45px]">
          Creating your beautiful home should not cost the world!
        </p>
        <img
          src={Circle}
          alt="Decorative Circle"
          className="absolute bottom-10 left-0 lg:left-[-160px] w-10 lg:w-auto"
        />
        <img
          src={Circle}
          alt="Decorative Circle"
          className="absolute bottom-[-40px] md:bottom-[-20px] lg:bottom-[-80px] right-20 w-10 lg:w-auto"
        />
      </div>
    </section>
  );
};

export default ShopLook;
