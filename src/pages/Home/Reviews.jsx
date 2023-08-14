import Marquee from "react-fast-marquee";
import img from "../../assets/clients/c1.jpg";
import img1 from "../../assets/clients/c2.jpg";
import img2 from "../../assets/clients/c3.jpg";
import img3 from "../../assets/clients/c4.jpg";
import img4 from "../../assets/clients/c5.jpg";
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
                &quot;Achieve IT Limited transformed our network infrastructure.
                Their proactive approach to monitoring and maintaining our
                systems has kept us online and efficient without a hitch.&quot;
              </p>
              <div className="flex justify-center items-center my-4">
                <img className="w-16 h-16 rounded-full mx-2" src={img} alt="" />
                <div>
                  <h3 className="font-bold text-xl">Jon Abraham</h3>
                  <h3 className="font-medium text-slate-600">
                    CIO, Info Stream Solution
                  </h3>
                </div>
              </div>
            </div>
            <div className=" bg-white max-w-[280px] shadow-lg p-4 rounded-xl my-10">
              <p className="text-justify">
                &quot;Achieve IT Limited is our cybersecurity shield. Their
                comprehensive strategies and rapid response to potential threats
                have given us peace of mind knowing our data is in safe
                hands.&quot;
              </p>
              <div className="flex justify-center items-center my-4">
                <img
                  className="w-16 h-16 rounded-full mx-2"
                  src={img1}
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-xl">Jon Abraham</h3>
                  <h3 className="font-medium text-slate-600">
                    CTO, Network Ninjas IT Solutions
                  </h3>
                </div>
              </div>
            </div>
            <div className=" bg-white max-w-[280px] shadow-lg p-4 rounded-xl my-10">
              <p className="text-justify">
                &quot;Achieve IT Limited turned our software idea into reality.
                Their development team&apos;s expertise and dedication resulted
                in an application that exceeded our expectations in terms of
                functionality and user experience&quot;
              </p>
              <div className="flex justify-center items-center my-4">
                <img
                  className="w-16 h-16 rounded-full mx-2"
                  src={img2}
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-xl">Adam Russel</h3>
                  <h3 className="font-medium text-slate-600">
                    CEO, CodeClub IT
                  </h3>
                </div>
              </div>
            </div>
            <div className=" bg-white max-w-[280px] shadow-lg p-4 rounded-xl my-10">
              <p className="text-justify">
                &quot;Achieve IT Limited migrated our operations to the cloud
                seamlessly. The scalability and reliability of their cloud
                solutions have elevated our business, ensuring smooth operations
                even during peak demand&quot;
              </p>
              <div className="flex justify-center items-center my-4">
                <img
                  className="w-16 h-16 rounded-full mx-2"
                  src={img3}
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-xl">Mark Leo</h3>
                  <h3 className="font-medium text-slate-600">
                    CEO, TechAssist Help desk Support
                  </h3>
                </div>
              </div>
            </div>
            <div className=" bg-white max-w-[280px] shadow-lg p-4 rounded-xl my-10">
              <p className="text-justify">
                &quot;Achieve IT Limited support is unmatched. Their
                knowledgeable team is available around the clock, resolving our
                IT issues promptly. Their quick response time minimizes
                disruptions and keeps us productive.&quot;
              </p>
              <div className="flex justify-center items-center my-4">
                <img
                  className="w-16 h-16 rounded-full mx-2"
                  src={img4}
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-xl">John Smith</h3>
                  <h3 className="font-medium text-slate-600">
                    CIO, DataVault Cloud Services
                  </h3>
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
