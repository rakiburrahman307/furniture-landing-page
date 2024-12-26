import Heading from "./Heading";

const feedbacks = [
  {
    name: "Emily Wilson",
    feedback:
      "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!",
  },
  {
    name: "Sarah Thompson",
    feedback:
      "I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!",
  },
  {
    name: "Olivia Martinez",
    feedback:
      "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!",
  },
];

const FeedbackCorner = () => {
  return (
    <section className='max-w-[1425px] mx-auto px-6 mt-24'>
      <div>
        <Heading>feedback corner</Heading>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-20'>
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className='rounded-[3px] shadow-customShadow pt-2 px-5 pb-10 duration-300 hover:bg-[#E9F4EE]'
          >
            <p className='text-6xl'>&quot;</p>
            <h3 className='font-semibold text-xl capitalize pb-6 font-serif'>
              {item?.name}
            </h3>
            <p className='font-medium text-base text-[#6F6F6F] duration-300 hover:text-black font-poppins'>
              {item?.feedback}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackCorner;
