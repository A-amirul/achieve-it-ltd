import Marquee from "react-fast-marquee";
import img from "../../assets/clients/c1.jpg";
import img1 from "../../assets/clients/c2.jpg";
import img3 from "../../assets/clients/c4.jpg";
import img4 from "../../assets/Blog/image3.jpg";
import img15 from "../../assets/images/images (9).jpg";
import { FaQuoteLeft } from "react-icons/fa";
const Reviews = () => {
  return (
    <div className="font-serif ">
      <h1 className="text-4xl mt-16 mb-8 font-semibold text-center w-96 mx-auto border-y-4 border-indigo-500">
        Our Clients Reviews
      </h1>
      <p className="text-slate-500 text-center my-2 font-medium">
        Know,What say our valuable clients about Us
      </p>

      <div className="md:max-w-screen-xl mx-auto">
        <Marquee>
          <div className="grid grid-cols-5 px-10 gap-4">
            <div className=" bg-white max-w-[280px] h-72 shadow-lg p-4 rounded-xl my-10 relative">
              <p className="text-2xl text-gray-300 pb-4"><FaQuoteLeft></FaQuoteLeft></p>
              <p className="text-justify text-gray-500">
              Kudos to Achieve IT&apos;s innovative web development. Utilizing the latest tech, they&apos;ve given my site a competitive edge. Impressive work!
              </p>
              <div className="absolute bottom-0 flex justify-center items-center my-4">
                <img className="w-16 h-16 rounded-full mx-2" src={img} alt="" />
                <div>
                  <h3 className="font-bold text-lg">Akram Khan</h3>
                  <small className="text-gray-400 ">Managing Director</small>
                </div>
              </div>
            </div>
            <div className="relative bg-white max-w-[280px] h-72 shadow-lg p-4 rounded-xl my-10">
            <p className="text-2xl text-gray-300 pb-4"><FaQuoteLeft></FaQuoteLeft></p>
              <p className="text-justify text-gray-500">
              Achieve IT&apos;s app revolutionized my business with its user-friendly interface and exceptional performance, earning enthusiastic customer reviews.
              </p>
              <div className="absolute bottom-0 flex justify-center items-center my-4">
                <img
                  className="w-16 h-16 rounded-full mx-2"
                  src={img1}
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-lg">Aminul Islam</h3>
                  <h3 className="font-medium text-slate-600">
                  <small className="text-gray-400 ">COO </small>
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative bg-white max-w-[280px] h-72 shadow-lg p-4 rounded-xl my-10">
            <p className="text-2xl text-gray-300 pb-4"><FaQuoteLeft></FaQuoteLeft></p>
              <p className="text-justify text-gray-500">
              Achieve IT makes dreams real! Their app turned my idea into reality, showcasing attention to detail.
              </p>
              <div className="absolute bottom-0 flex justify-center items-center my-4">
                <img
                  className="w-16 h-16 rounded-full mx-2"
                  src={img15}
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-lg">Nusrat Jahan</h3>
                  <small className="text-gray-400 ">HR-Hero IT </small>
                </div>
              </div>
            </div>
            <div className="relative bg-white max-w-[280px] h-72 shadow-lg p-4 rounded-xl my-10">
            <p className="text-2xl text-gray-300 pb-4"><FaQuoteLeft></FaQuoteLeft></p>
              <p className="text-justify text-gray-500">
              Impressed by Achieve IT&apos;s coding prowess! They created a custom web solution for my e-commerce store that&apos;s both visually appealing and highly functional. A job well done!.
              </p>
              <div className="absolute bottom-0 flex justify-center items-center my-4">
                <img
                  className="w-16 h-16 rounded-full mx-2"
                  src={img3}
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-lg">Shafiq Ahmed</h3>
                  <small className="text-gray-400 ">IT Executive </small>
                </div>
              </div>
            </div>
            <div className="relative bg-white max-w-[280px] h-72 shadow-lg p-4 rounded-xl my-10">
            <p className="text-2xl text-gray-300 pb-4"><FaQuoteLeft></FaQuoteLeft></p>
              <p className="text-justify text-gray-500">
              Thanks to Achieve IT, my online business is thriving. Their e-commerce web solution is driving sales and providing an engaging shopping experience. Highly recommended!
              </p>
              <div className="absolute bottom-0 flex justify-center items-center my-4">
                <img
                  className="w-16 h-16 rounded-full mx-2"
                  src={img4}
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-lg">Imran Khan</h3>
                  <small className="text-gray-400 ">Project Manager </small>
                </div>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Reviews;
