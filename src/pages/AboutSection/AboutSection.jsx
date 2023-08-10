import About from "./About";
import CEOSection from "./CEOSection";
import LeadershipTeam from "./LeadershipTeam";
import OurGoal from "./OurGoal";
import OurStory from "./OurStory";
const AboutSection = () => {
  return (
    <div className=" mx-auto max-w-screen-xl">
      <h1 className="text-4xl mt-16 mb-8 font-semibold ">ABOUT US</h1>
      <About></About>
      <h1 className="text-5xl mt-16 mb-8 font-semibold text-center">Our Story</h1>
      <p className="text-slate-500 text-center my-2 font-medium">
        Know about Us
      </p>
      <OurStory></OurStory>
      <CEOSection></CEOSection>
      <OurGoal></OurGoal>
      <div className="mt-16 mb-10">
        <h1 className="text-5xl font-semibold px-5 text-center">
          {" "}
          LEADERSHIP TEAM{" "}
        </h1>
        <LeadershipTeam></LeadershipTeam>
      </div>
    </div>
  );
};

export default AboutSection;
