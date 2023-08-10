const CEOSection = () => {
  return (
    <div className="mt-16 mb-8 flex-row md:flex gap-10">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold px-5">
          HEAR OUR CEO, MRS. SULTAN JERIN ANJUM IN PAYONEER STORIES
        </h1>
        <p className="mt-5 px-5">
          Mrs. Sultan Jerin Anjum is a digital marketing industry veteran. With
          more than 15 years of experience, Rifat is one of the finest digital
          marketing professionals you’ll come across. <br />
          Having served as the Business Development Head at Payoneer Bangladesh,
          Rifat has an extraordinary story to share.
          <br />
          Hear Rifat’s story and learn how he became a digital marketing maestro
          from the scratch!
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
