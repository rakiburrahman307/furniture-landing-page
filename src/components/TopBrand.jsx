import topBrand1 from "../assets/images/topBrand/topBrand1.png";
import topBrand2 from "../assets/images/topBrand/topBrand2.png";
import topBrand3 from "../assets/images/topBrand/topBrand3.png";
import topBrand4 from "../assets/images/topBrand/topBrand4.png";
import topBrand5 from "../assets/images/topBrand/topBrand5.png";
import Heading from "./Heading";

const brandImages = [
  { src: topBrand1, alt: "Top Brand 1" },
  { src: topBrand2, alt: "Top Brand 2" },
  { src: topBrand3, alt: "Top Brand 3" },
  { src: topBrand4, alt: "Top Brand 4" },
  { src: topBrand5, alt: "Top Brand 5" },
];

const TopBrand = () => {
  return (
    <section className="container mx-auto px-6 my-24">
      <div>
        <Heading>top brand</Heading>
        <div className="flex justify-between items-center gap-3 pt-20">
          {brandImages.map((brand, index) => (
            <img
              key={index}
              src={brand?.src}
              alt={brand?.alt}
              className="block w-[104.26px] h-[92.79px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrand;
