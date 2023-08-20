import career2 from '../../assets/Career/career2.jpg'
const CareerSection = () => {
  return (
    <div className="mx-auto max-w-screen-xl py-20">
         
      <div className="flex-row md:flex ">
        <div className="md:w-3/5 px-5 md:px-0">
        <h1 className='text-3xl font-bold '>Career @ Achieve IT Limited</h1>
          <p className='text-justify text-lg mt-10'>
          Achieve IT Limited LLC is a multinational digital marketing agency. It is
            not just a company; it’s a dream. It’s a dream of like-minded people
            who only care about learning, growing, having fun, enjoying a
            work-life balance. We are NOT money-hungry people; we are growth
            driven, passionate and fun-loving people. This company is our
            family, and we give everything we have in it, so it can give us back{" "}
            <br /> everything we have ever dreamed of. At Achieve IT Limited, you can
            expect a secure career, where you can have tremendous growth
            opportunity, and discover your true potential.
          </p>
        </div>
        <div className="md:w-2/5 mt-8 md:mt-0">
            <img className='w-72 mx-auto' src={career2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
