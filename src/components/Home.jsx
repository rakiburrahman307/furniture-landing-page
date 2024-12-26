import FeedbackCorner from "./FeedbackCorner";
import Footer from "./Footer";
import Header from "./Header";
import LoungeChar from "./LoungeChar";
import OurBlog from "./OurBlog";
import TopBrand from "./TopBrand";

const Home = () => {
  return (
    <div>
      <Header />
      <LoungeChar />
      <OurBlog />
      <FeedbackCorner />
      <TopBrand />
      <Footer/>
    </div>
  );
};

export default Home;
