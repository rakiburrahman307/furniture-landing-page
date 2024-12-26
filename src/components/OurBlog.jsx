import ourBlog1 from "../assets/images/ourBlog/ourBlog1.jpeg";
import ourBlog2 from "../assets/images/ourBlog/ourBlog2.jpeg";
import ourBlog3 from "../assets/images/ourBlog/ourBlog3.jpeg";
import Heading from "./utils/Heading";

const blogData = [
  {
    imgSrc: ourBlog1,
    date: "5",
    month: "June",
    category: "Dining Chair",
    title: "DOUBLE SOFA- ATHENS",
    description:
      "Elegant, ergonomic dining chair with premium materials and modern design.",
    link: "#",
  },
  {
    imgSrc: ourBlog2,
    date: "5",
    month: "June",
    category: "Sofa",
    title: "DOUBLE SOFA- ATHENS",
    description:
      "Elegant, ergonomic dining chair with premium materials and modern design.",
    link: "#",
  },
  {
    imgSrc: ourBlog3,
    date: "5",
    month: "June",
    category: "Sofa",
    title: "DOUBLE SOFA- ATHENS",
    description:
      "Elegant, ergonomic dining chair with premium materials and modern design.",
    link: "#",
  },
];

const OurBlog = () => {
  return (
    <section className='container mx-auto px-6 mt-52'>
      <div>
        <Heading>Our blog</Heading>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 pt-20'>
        {blogData?.map((blog, index) => (
          <div key={index} className=''>
            <div className='relative'>
              <img
                src={blog?.imgSrc}
                alt={`Blog ${index + 1}`}
                className='block w-full h-[267.03px] object-cover'
              />
              <div className='absolute top-4 left-4 bg-white rounded-lg py-2 px-[18px] text-center'>
                <p>{blog?.date}</p>
                <p className='capitalize'>{blog?.month}</p>
              </div>
            </div>
            <div className='py-5'>
              <h4 className='text-[#FF6F00] font-medium capitalize font-serif'>
                {blog?.category}
              </h4>
              <h3 className='uppercase text-xl py-2 font-mochiy'>
                {blog?.title}
              </h3>
              <p className='text-[#979797] pb-5 font-serif'>
                {blog?.description}
              </p>
              <a
                href={blog?.link}
                className='capitalize text-[11px] font-mochiy pb-1 border-b-[1px] border-b-black duration-300 hover:text-[#FF6F00] hover:border-b-[#FF6F00]'
              >
                read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBlog;
