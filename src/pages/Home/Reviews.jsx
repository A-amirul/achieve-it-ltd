import Marquee from "react-fast-marquee";
import img from "../../assets/clients/c1.jpg";
import img1 from "../../assets/clients/c2.jpg";
import img3 from "../../assets/clients/c4.jpg";
import img4 from "../../assets/clients/c5.jpg";
import img15 from "../../assets/clients/15.jpg";
const Reviews = () => {
  return (
    <div className="font-serif">
      <h1 className="text-4xl mt-16 mb-8 font-semibold text-center">
        Our Clients Reviews
      </h1>
      <p className="text-slate-500 text-center my-2 font-medium">
        Know,What say our valuable clients about Us
      </p>

      <div className="md:max-w-screen-xl mx-auto">
        <Marquee>
          <div className="grid grid-cols-5 px-10 gap-4">
            <div className=" bg-white max-w-[280px] shadow-lg p-4 rounded-xl my-10">
              <p className="text-justify">
              Kudos to Achieve IT for their cutting-edge approach to web development. Their use of the latest technologies has given my website a competitive edge. Truly innovative!
              </p>
              <div className="flex justify-center items-center my-4">
                <img className="w-16 h-16 rounded-full mx-2" src={img} alt="" />
                <div>
                  <h3 className="font-bold text-xl">Akram Khan</h3>
                  
                </div>
              </div>
            </div>
            <div className=" bg-white max-w-[280px] shadow-lg p-4 rounded-xl my-10">
              <p className="text-justify">
                &quot;The mobile app developed by Achieve IT is a game-changer for my business. The user-friendly interface and smooth performance have attracted rave reviews from my customers.&quot;
              </p>
              <div className="flex justify-center items-center my-4">
                <img
                  className="w-16 h-16 rounded-full mx-2"
                  src={img1}
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-xl">Aminul Islam</h3>
                  <h3 className="font-medium text-slate-600">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className=" bg-white max-w-[280px] shadow-lg p-4 rounded-xl my-10">
              <p className="text-justify">
                Achieve IT turns dreams into digital reality! Their mobile app transformed my innovative idea into a practical solution. Their attention to detail is commendable.
              </p>
              <div className="flex justify-center items-center my-4">
                <img
                  className="w-16 h-16 rounded-full mx-2"
                  src={img15}
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-xl">Nusrat Jahan</h3>
                 
                </div>
              </div>
            </div>
            <div className=" bg-white max-w-[280px] shadow-lg p-4 rounded-xl my-10">
              <p className="text-justify">
              Impressed by Achieve IT&apos;s coding prowess! They created a custom web solution for my e-commerce store that&apos;s both visually appealing and highly functional. A job well done!.
              </p>
              <div className="flex justify-center items-center my-4">
                <img
                  className="w-16 h-16 rounded-full mx-2"
                  src={img3}
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-xl">Shafiq Ahmed</h3>
                  
                </div>
              </div>
            </div>
            <div className=" bg-white max-w-[280px] shadow-lg p-4 rounded-xl my-10">
              <p className="text-justify">
              Thanks to Achieve IT, my online business is thriving. Their e-commerce web solution is driving sales and providing an engaging shopping experience. Highly recommended!
              </p>
              <div className="flex justify-center items-center my-4">
                <img
                  className="w-16 h-16 rounded-full mx-2"
                  src={img4}
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-xl">Imran Khan</h3>
                 
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
