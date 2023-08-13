import CountUp from "react-countup";
const Counter = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 flex items-center justify-around">
      <CountUp start={0} end={50} delay={0}>
        {({ countUpRef }) => (
          <div className="text-center">
            <p className="text-7xl font-medium text-blue-600"><span ref={countUpRef} />+</p>
            <p className="text-lg font-semibold text-gray-500 mt-2">Our Total Project</p>
          </div>
        )}
      </CountUp>
      <CountUp start={0} end={500} delay={0} duration={2}>
        {({ countUpRef }) => (
          <div className="text-center">
            <p className="text-7xl font-medium text-blue-600"><span ref={countUpRef} />+</p>
            <p className="text-lg font-semibold text-gray-500 mt-2">Our Active Member</p>
          </div>
        )}
      </CountUp>
      <CountUp start={0} end={150} delay={0}>
        {({ countUpRef }) => (
          <div className="text-center">
            <p className="text-7xl font-medium text-blue-600"><span ref={countUpRef} />+</p>
            <p className="text-lg font-semibold text-gray-500 mt-2">Our Team Member</p>
          </div>
        )}
      </CountUp>
    </div>
  );
};
export default Counter;
