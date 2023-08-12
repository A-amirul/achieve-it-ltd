import image4 from "../../assets/AboutSection/image4.png";

const LeadershipTeam = () => {
  return (
    <div className="">
      <div className="mt-16 grid md:grid-cols-4 gap-4 mx-auto max-w-screen-xl">
        <div className="border-2 mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500">
          <img className="h-52 w-52 rounded-full mx-auto" src={image4} alt="" />
          <h2 className="text-xl font-bold text-center mt-5">
            Mrs. Sultan Jerin Anjum
          </h2>
          <h3 className="mt-2 text-center">Chairman of Achieve It Ltd</h3>
        </div>
        <div className="border-2 mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500">
          <img className="h-52 w-52 rounded-full mx-auto" src={image4} alt="" />
          <h2 className="text-xl font-bold text-center mt-5">
            Md Fazlay Rabbi{" "}
          </h2>
          <h3 className="mt-2 text-center">Managing Director </h3>
        </div>
        <div className="border-2 mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500">
          <img className="h-52 w-52 rounded-full mx-auto" src={image4} alt="" />
          <h2 className="text-xl font-bold text-center mt-5">ABC</h2>
          <h3 className="mt-2 text-center">ABC</h3>
        </div>

        <div className="border-2 mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 ">
          <img className="h-52 w-52 rounded-full mx-auto" src={image4} alt="" />
          <h2 className="text-xl font-bold text-center mt-5">XYZ</h2>
          <h3 className="mt-2 text-center">XYZ.</h3>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;
