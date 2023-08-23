import image4 from "../../assets/Blog/image4.png";
import image5 from "../../assets/Blog/image5.png";
import image6 from "../../assets/Blog/image6.png";
import image2 from "../../assets/Blog/image2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Blogs = () => {
    useEffect(()=>{
    AOS.init({duration: 1500})
  }, [])
  return (
    <div className="overflow-hidden">
      <div className=" md:visible invisible	">
        <div className="flex justify-center items-center md:my-20 ">
          <p className="text-5xl font-bold text-cyan-700">Wellc</p>
          <div className="w-7 h-7 border-8 border-dashed  rounded-full animate-spin mt-4  border-orange-500"></div>
          <p className="text-5xl font-bold pr-4 text-cyan-700">me</p>
          <p className="text-5xl font-bold pr-4 text-cyan-700">To</p>
          <div className="w-7 h-7 border-8 border-dashed rounded-full animate-spin mt-4 border-orange-500"></div>
          {/* <div className="w-7 h-7 border-8 border-dashed  rounded-full animate-spin mt-3 border-green-400"></div> */}
          <p className="text-5xl font-bold text-cyan-700">ur Bl</p>
          <div className="w-7 h-7 border-8 border-dashed  rounded-full animate-spin mt-4  border-orange-500"></div>
          <p className="text-5xl font-bold text-cyan-700">gs</p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto md:mt-10 grid md:grid-cols-2 gap-20 px-5 md:px-0">
        <div data-aos="fade-right" className="">
          <h1 className="text-xl font-bold mb-2">ChatGPT </h1>
          <div className="w-full overflow-hidden">
            <img
              className="w-full hover:scale-125 transition  duration-1000"
              src={image2}
              alt=""
            />
          </div>
          <p className="text-justify mt-10">
            As the Assistant explained, ChatGPT is a large language model
            trained by the San Francisco company OpenAI. It has been trained on
            text information covering a variety of subjects, but its knowledge
            only goes up to the end of 2021, and it can’t access the internet to
            find new information. <br />
            One of the biggest differences between this chat AI and others we’ve
            seen in the past is its amazing ability to remember information from
            previous messages and write replies that draw on the context of the
            entire conversation. It can also produce far more natural and
            accurate language than other publicly-available AI, and in most
            cases, it’s pretty indistinguishable from text written by a native
            human speaker.
          </p>
        </div>
        <div data-aos="fade-left" className="">
          <h1 className="text-xl font-bold mb-2">
            The Impact Of ChatGPT On Blockchain And Web3 Space
          </h1>
          <div className="w-full overflow-hidden">
            <img
              className="w-full hover:scale-125 transition duration-1000 "
              src={image4}
              alt=""
            />
          </div>
          <p className="text-justify mt-10">
            ChatGPT was the biggest technology release in 2022, tailored to
            highlight the features of the emerging GPT-4. It has crossed the
            limitations of AI space and has become a prominent highlight in pop
            culture right now. In addition, the overview of ChatGPT impact on
            blockchain and web3 has also been one of the prominent highlights in
            showcasing the potential of ChatGPT. The best thing about ChatGPT is
            the way it has shifted the discussions about AI from the tables of
            tech experts to mainstream media and dinner conversations. Just over
            two years ago, no one would have thought that the AI revolution
            would gain momentum at such a large scale within a few years. <br />
            The search for insights regarding ChatGPT impact on blockchain
            starts from awareness regarding the functionalities of ChatGPT. It
            is the most recent addition among the large language models with the
            power of generative AI. ChatGPT has been establishing new milestones
            in the transformation of user experience, content creation, and
            application development. Therefore, speculations regarding the
            effect of ChatGPT on different industries, such as blockchain and
            web3, have become noticeable topics of discussion. The following
            post helps you learn about different ways in which ChatGPT can
            influence the blockchain and web3 industry.
          </p>
        </div>
        <div data-aos="fade-right" className="">
          <h1 className="text-xl font-bold mb-2">
            Native or Cross-Platform: Mobile Development
          </h1>
          <div className="w-full overflow-hidden">
            <img
              className="w-full hover:scale-125 transition duration-1000 "
              src={image5}
              alt=""
            />
          </div>
          <p className="text-justify mt-10">
            Native app development involves creating separate versions of an app
            for each platform (iOS and Android) using platform-specific tools
            and languages. This approach offers distinct benefits, including
            optimized performance, seamless user experience, and access to the
            latest platform features. Native apps often excel in security due to
            integration with platform-specific measures. However, this approach
            requires more time, resources, and expertise in platform-specific
            languages. <br />
            In contrast, cross-platform development employs frameworks like
            React Native or Flutter to build apps that work across platforms
            using a single codebase. This method promotes code reusability,
            faster development, and a consistent user experience. Yet,
            performance might not match fully native apps in certain cases, and
            accessing advanced platform features can be challenging. Dependency
            on framework updates is another consideration.
            <br />
            Choosing between these approaches depends on project factors such as
            complexity, budget, timeline, and user experience goals. Native
            development offers platform-specific excellence, while
            cross-platform development emphasizes efficiency and broader reach.
            Weigh the pros and cons carefully to make the right choice for your
            app, always prioritizing your users&apos; needs.
          </p>
        </div>
        <div data-aos="fade-left" className="">
          <h1 className="text-xl font-bold mb-2">
            Data Security with multiple business values
          </h1>
          <div className="w-full overflow-hidden">
            <img
              className="w-full hover:scale-125 transition duration-1000 "
              src={image6}
              alt=""
            />
          </div>
          <p className="text-justify mt-10">
            In today&apos;s interconnected digital landscape, the significance
            of data security extends beyond the realm of protection alone. While
            safeguarding sensitive information remains a core priority, it also
            brings forth a multitude of invaluable business advantages.
            Upholding stringent data security measures fosters a foundation of
            trust and credibility among customers, partners, and stakeholders.
            This, in turn, bolsters brand reputation and cultivates lasting
            customer loyalty. Moreover, adhering to data security protocols
            ensures alignment with industry regulations, mitigating the
            potential for regulatory fines and legal entanglements. <br />
            Yet, the benefits of data security don&apos;t end there. By
            fortifying data against breaches, businesses empower themselves to
            explore innovative data-driven strategies with confidence. This
            could encompass leveraging cutting-edge technologies like artificial
            intelligence and analytics, which thrive on the availability of
            reliable and secure data. The outcome is not merely risk mitigation,
            but a strategic vantage point that propels competitiveness,
            innovation, and sustainable growth.
            <br />
            In essence, data security serves as more than just a protective
            shield; it&apos;s a catalyst for cultivating a resilient brand
            image, harnessing the potential of transformative technologies, and
            driving multifaceted business values that contribute to long-term
            success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
