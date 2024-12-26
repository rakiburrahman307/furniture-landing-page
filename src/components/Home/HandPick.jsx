import sofa1 from "../../assets/images/handPick/sofa1.jpeg";
import sofa2 from "../../assets/images/handPick/sofa2.jpeg";
import sofa3 from "../../assets/images/handPick/sofa3.jpeg";
import sofa4 from "../../assets/images/handPick/sofa4.jpeg";
import centerSofa from "../../assets/images/handPick/center-sofa.png";
import Card from "../utils/Card";

const HandPick = () => {
  const sofas = [
    {
      id: 1,
      img: sofa1,
      title: "Wooden Sofa Set",
      price: "$39.99",
      rating: 5.0,
    },
    {
      id: 2,
      img: sofa3,
      title: "L-SHAPE SOFA-PARIS",
      price: "$39.99",
      rating: 5.0,
    },
    {
      id: 3,
      img: sofa4,
      title: "L-SHAPE SOFA-PARIS",
      price: "$39.99",
      rating: 5.0,
    },
    { id: 4, img: sofa2, title: "L-SHAPE Chair", price: "$39.99", rating: 5.0 },
  ];

  return (
    <section className='max-w-[1425px] mx-auto px-6 my-24 relative'>
      <h2 className='font-mochiy text-[30px] text-black text-center mb-20'>
        Hand Pick
      </h2>

      <div className='flex flex-wrap justify-center gap-4 lg:justify-between items-center mt-10'>
        {sofas?.slice(0, 2).map((sofa) => (
          <Card key={sofa.id} sofa={sofa} />
        ))}
      </div>

      <div>
        <img
          className='w-[534px] h-[461px] md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2'
          src={centerSofa}
          alt='sofa'
        />

        <div className='flex flex-wrap justify-center gap-4 lg:justify-between items-center mt-10'>
          {sofas?.slice(2).map((sofa) => (
            <Card key={sofa?.id} sofa={sofa} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default HandPick;
