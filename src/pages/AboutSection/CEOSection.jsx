const CEOSection = () => {
  return (
    <div className="mt-16 mb-8 flex-row md:flex gap-10  mx-auto max-w-screen-xl py-10 items-center">
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold px-5">
          HERE OUR CEO, MRS. SULTANA JERIN ANJUM IN PAYONEER STORIES
        </h1>
        <p className="mt-5 px-5 text-justify">
          As the CEO of Achieve IT Limited, my primary goal is to drive
          transformative growth and innovation in the digital landscape. Our
          company&apos;s mission extends beyond being a leading IT firm. we aim
          to empower businesses by crafting exceptional software experiences
          that transcend expectations and redefine industries. Our culture of
          innovation fuels our commitment to push boundaries and explore the
          uncharted, while our collaboration-driven approach fosters
          breakthroughs that arise from diverse talents and perspectives. Client
          success is paramount, and our dedication to understanding their unique
          challenges and ambitions makes us true growth partners. Continuous
          learning and ethical responsibility guide us as we navigate the
          rapidly evolving technological landscape. Together, we are not only
          building software, but also creating a legacy of positive impact,
          sustainability, and progress. With unwavering dedication, we are
          shaping the future where technology and innovation lead us to new
          frontiers.
        </p>
      </div>
      <div className="md:w-1/2 mt-5 md:mt-5">
        <video className="rounded-xl px-5" width="750" height="500" controls>
          <source src="..Videos/video1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
export default CEOSection;
