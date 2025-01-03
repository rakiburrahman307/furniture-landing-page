import BestDeals from "./BestDeals";
import FeedbackCorner from "./FeedbackCorner";
import Footer from "./Footer";
import HandPick from "./HandPick";
import Header from "./Header";
import HeaderCard from "./HeaderCard";
import LoungeChar from "./LoungeChar";
import NewArrival from "./NewArrival";
import OurBlog from "./OurBlog";
import ShopLook from "./ShopLook";
import Subscribe from "./Subscribe";
import TopBrand from "./TopBrand";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Header />
      <HeaderCard/>
      <LoungeChar />
      <NewArrival/>
      <BestDeals/>
      <HandPick/>
      <Subscribe/>
      <ShopLook/>
      <OurBlog />
      <FeedbackCorner />
      <TopBrand />
      <Footer/>
    </div>
  );
};

export default Home;
