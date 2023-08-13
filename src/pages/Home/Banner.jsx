import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-[calc(100vh-115px)]"
        style={{
          backgroundImage: "url('https://i.ibb.co/nr873vW/banner1.jpg')",
        }}
      >
        <div className="hero min-h-screen">
          <div className="hero-content -mt-72 md:-mt-40">
            <div className=" ">
              <div>
                <h1 className="text-3xl md:text-6xl py-8 font-bold text-blue-400">
                  Achieve <span className="text-yellow-400">IT</span> Limited
                </h1>
                <h3 className="text-yellow-400 font-medium text-2xl md:text-4xl">
                  Innovate, Connect & Succeed
                </h3>
                <p className="py-4 text-lg lg:me-36 lg:pe-60 text-base-100">
                  Achieve IT Limited is certified next-generation global IT
                  service and technology solution provider company that helps
                  enterprises reimagine their business and navigate their
                  digital transformation.
                </p>
               <div className="pt-4">
               <Link to="/comingSoon" className="btn bg-gradient-to-r text-lg  from-emerald-500 to-lime-500 mr-4 px-8 font-semibold ">
                  Visit Here
                </Link>
                  
                <Link to="/comingSoon" className="btn bg-gradient-to-r text-lg px-10   from-orange-500 to-yellow-500 font-semibold">
                  Services
                </Link>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
