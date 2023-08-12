
import image2 from "../../assets/AboutSection/images2.jpg";

import image5 from "../../assets/AboutSection/image5.jpg";
import image8 from "../../assets/AboutSection/image8.jpg";
import image9 from "../../assets/AboutSection/image9.jpg";

const OurStory = () => {
  return (
    <div className="flex-row md:flex gap-8 items-center justify-center">
      <div className="px-5 md:px-0 md:w-1/2">
        <p className="text-justify px-5 md:px-0">
          Back in 2007, Rifat Ahmed, the founder of MonsterClaw, decided that
          his years of experience in digital marketing should get a bigger
          platform to help promising businesses all over the world. Hence,
          MonsterClaw was born. <br />
          Today MonsterClaw is a team of 50+ in-house digital marketing
          professionals, along with a large remote team working from different
          parts of the world.
          <br />
          MonsterClaw has received numerous awards and accolades for providing
          its clients with world-class digital marketing services. We have been
          recognized as one of the best B2B marketing and advertising agencies
          in the world by multiple platforms. On top of that, MonsterClaw ranks
          among the top 3 Affiliate Marketing Agencies worldwide.
          <br />
          We love helping authentic businesses to grow. We understand that an
          experienced and reliable team is the heart of any company. We become a
          part of the team to grow the business to its potential.
          <br />
          Even though our initial plans were to focus more on affiliate
          marketing and management, we were kind of forced to become a
          full-fledged digital marketing agency. Our clients love us and they
          kept asking, “What else do you guys do?”
          <br />
          We wanted our clients and other promising businesses to find every
          digital marketing service they need under one roof. Gradually we
          introduced Search Engine Optimization, Content Marketing, IT
          Solutions, and so on.
          <br />
          A very important thing about MonsterClaw is – we are not money-driven.
          We are challenge-driven and we do marketing because we love it. Every
          single person in the team is someone who loves and enjoys marketing,
          and sees their career in it.
          <br />
          The dedicated team allowed us to grow over 300% in 2021, and we are
          just getting warmed up to crush it in 2022.
          <br />
          We are committed to delivering quality marketing services on time that
          add real value to grow beyond expectation. Our policy of work is “It
          has to be the absolute best result”.
          <br />
          When it comes to serving our clients, we aim to deliver the absolute
          best results. Clients may have high expectations, but we want to go
          even beyond. So far, we have been highly successful in achieving that.
        </p>
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
