import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Counter = () => {
  const [containerOn, setContainerOn] = useState(false);
  return (
    <div className="max-w-screen-xl mx-auto py-16 ">
      <ScrollTrigger
        onEnter={() => setContainerOn(true)}
        onExit={() => setContainerOn(false)}
      >
        {containerOn && (
          <div className="flex-row md:flex items-center justify-around ">
            <CountUp start={0} end={50} delay={0} duration={10}>
              {({ countUpRef }) => (
                <div className="text-center border-r-2 border-b-2 w-full py-10">
                  <p className="text-7xl font-medium text-blue-800">
                    <span ref={countUpRef} />+
                  </p>
                  <p className="text-lg font-semibold text-[#f74883] mt-2">
                    Our Total Project
                  </p>
                  
                </div>
                
              )}
            </CountUp>
            <CountUp start={0} end={500} delay={0} duration={10}>
              {({ countUpRef }) => (
                <div className="text-center border-b-2 w-full py-10">
                  <p className="text-7xl font-medium text-blue-800">
                    <span ref={countUpRef} />+
                  </p>
                  <p className="text-lg font-semibold text-[#f74883] mt-2">
                    Our Active Member
                  </p>
                </div>
              )}
            </CountUp>
            <CountUp start={0} end={150} delay={0} duration={10}>
              {({ countUpRef }) => (
                <div className="text-center border-l-2 border-b-2 w-full py-10">
                  <p className="text-7xl font-medium text-blue-800">
                    <span ref={countUpRef} />+
                  </p>
                  <p className="text-lg font-semibold text-[#f74883] mt-2">
                    Our Team Member
                  </p>
                </div>
              )}
            </CountUp>
          </div>
        )}
      </ScrollTrigger>
    </div>
  );
};
export default Counter;
