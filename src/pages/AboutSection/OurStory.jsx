import image2 from "../../assets/AboutSection/images2.jpg";

import image5 from "../../assets/AboutSection/image5.jpg";
import image8 from "../../assets/AboutSection/image8.jpg";
import image9 from "../../assets/AboutSection/image9.jpg";

const OurStory = () => {
  return (
    <div  className="bg-[#fafafa]">
      <div   className="mx-auto max-w-screen-xl pt-16">
        <h1 id="ourstory" className="text-4xl mt-16 mb-8 font-semibold text-center w-60 mx-auto border-y-4 border-indigo-500 py-2">
          Our Story
        </h1>
        <p className="text-slate-500 text-center my-2 font-medium">
          Know about Us
        </p>
        <div className="flex-row md:flex gap-8 items-center justify-center ">
          <div className="px-5 md:px-0 md:w-1/2">
            <p className="text-justify px-5 md:px-0">
              In 2023, Md Fazlay Rabbi, the visionary founder of Achieve IT
              Limited, recognized the potential to amplify his extensive web
              development experience on a global scale to uplift promising
              businesses. This gave birth to Achieve IT Limited, a venture that
              stands as a testament to his expertise and ambition. <br />
              Today, Achieve IT Limited boasts a dedicated team of 5+ in-house
              professionals, alongside a vast remote workforce spanning the
              globe. Esteemed for its exceptional web development services, the
              company has garnered prestigious awards and acclaim, solidifying
              its status as a top-tier B2B marketing and advertising agency. Our
              passion lies in fostering the growth of authentic businesses.
              Acknowledging that a proficient and dependable team is the
              backbone of any enterprise, we seamlessly integrate ourselves into
              our clients teams to fuel their expansion. <br />
              While our original focus was web development, client demand led us
              to evolve into a comprehensive digital marketing agency. Our
              commitment is not rooted in monetary gain but in the pursuit of
              challenges, driven by the sheer love for marketing. Every team
              member shares this dedication and views marketing as a lifelong
              passion. We pride ourselves on offering an extensive range of
              digital marketing services under one roof to meet the diverse
              needs of our clients. Our portfolio encompasses Search Engine
              Optimization, Content Marketing, IT Solutions, App Development,
              UI/UX Design, and more. At Achieve IT Limited, our ethos centers
              on delivering quality marketing and web development services
              promptly, adding substantial value that consistently exceeds
              expectations. <br />
              Our guiding work philosophy is uncompromising: &quot;It must be
              the absolute best result.&quot; Client satisfaction is our
              paramount objective, and we relentlessly strive to exceed their
              expectations. Our clients anticipate high-quality outcomes, but
              we&apos;re resolute in surpassing those anticipations. We&apos;ve
              consistently demonstrated success in this regard. As we look
              ahead, our commitment to excellence remains unwavering, driven by
              our passion for achieving the extraordinary.
            </p>
          </div>
          <div className="md:w-1/2 relative px-5">
            <div className="h-40 md:h-60">
              <img
                className="absolute top-0 right-5 h-40 md:h-60 rounded-2xl hover:border-2 border-sky-500 hover:p-2"
                src={image9}
                alt=""
              />
            </div>
            <div className="h-40 md:h-60">
              <img
                className="absolute top-28  h-40 md:h-60 rounded-2xl hover:border-2 border-sky-500 hover:p-2"
                src={image2}
                alt=""
              />
            </div>
            <div className="h-40 md:h-60">
              <img
                className="absolute top-96 md:top-[350px]  md:right-0  h-40 md:h-60 rounded-2xl hover:border-2 border-sky-500 hover:p-2"
                src={image8}
                alt=""
              />
            </div>
            <div className="h-40 md:h-60">
              <img
                className="absolute top-56 md:top-[550px] md:left-0 right-5  h-40 md:h-60 rounded-2xl hover:border-2 border-sky-500 hover:p-2"
                src={image5}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
