const CEOSection = () => {
  return (
    <div className="mt-16 mb-8 flex-row md:flex gap-10">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold px-5">
          HEAR OUR CEO, MRS. SULTAN JERIN ANJUM IN PAYONEER STORIES
        </h1>
   
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
