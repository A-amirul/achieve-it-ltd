
import image2 from "../../assets/AboutSection/images2.jpg";

import image5 from "../../assets/AboutSection/image5.jpg";
import image8 from "../../assets/AboutSection/image8.jpg";
import image9 from "../../assets/AboutSection/image9.jpg";

const OurStory = () => {
  return (
    <div className="flex-row md:flex gap-8 items-center justify-center">
      <div className="px-5 md:px-0 md:w-1/2">
        
      </div>
      <div className="md:w-1/2 relative px-5">
        <div className="h-40 md:h-60">
          <img
            className="absolute top-0 right-5 h-40 md:h-60 rounded-2xl"
            src={image9}
            alt=""
          />
        </div>
        <div className="h-40 md:h-60">
          <img
            className="absolute top-28  h-40 md:h-60 rounded-2xl"
            src={image2}
            alt=""
          />
        </div>
        <div className="h-40 md:h-60">
          <img
            className="absolute top-96 md:top-[350px]  md:right-0  h-40 md:h-60 rounded-2xl"
            src={image8}
            alt=""
          />
        </div>
        <div className="h-40 md:h-60">
          <img
            className="absolute top-56 md:top-[550px] md:left-0 right-5  h-40 md:h-60 rounded-2xl"
            src={image5}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
