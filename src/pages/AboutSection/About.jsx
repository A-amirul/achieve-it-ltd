import image4 from "../../assets/AboutSection/image4.png";

const About = () => {
  return (
    <div className="mx-auto max-w-screen-xl py-10">
      <h1 className="text-4xl mt-16 mb-8 font-semibold ">ABOUT US</h1>
      <div className="flex-row md:flex gap-10 items-center">
        <div className="w-full mx-auto md:w-1/3 ">
          <img className="h-60 w-72 mx-auto" src={image4} alt="" />
        </div>
        <div className="px-5 mt-5 text-justify md:w-2/3">
          <p>
            Excuses can be valid or invalid, but at the end of the day a valid
            excuse is also an excuse, and we don&apos;t entertain any excuses in
            Achieve IT. We focus on getting a job done, and no matter what, we
            simply get the job done and bring in the results.Mrs. Sultan Jerin
            Anjum (CEO)
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
