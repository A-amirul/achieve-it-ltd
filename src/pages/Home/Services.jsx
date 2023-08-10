import web from "../../assets/web.png";
import app from "../../assets/app.png";
import graphics from "../../assets/graphics.png";
import marketing from "../../assets/marketing.png";
import UI from "../../assets/UI.png";
import IT from "../../assets/IT.png";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <h3 className="md:text-4xl font-semibold text-center">Our Services</h3>
      <p className="text-slate-500 text-center my-2 font-medium">
        know, What kind of services we are offering
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-10">
        <div className="bg-base-200 h-64 rounded shadow-md">
          <img className="w-28 h-28 mx-auto p-4" src={web}></img>
          <h3 className="text-center py-2 font-bold md:text-xl">
            Web Design & Development
          </h3>
          <p className="text-center font-medium text-slate-500 px-2">
            We will provide Web design & Development services by experienced Web
            developers.
          </p>
          <Link>
            <div className="flex justify-center items-center gap-2 mt-4 hover:bg-grey-600">
              <FaArrowAltCircleRight className="text-blue-500"></FaArrowAltCircleRight>
              <p className="text-center font-medium text-blue-500">See More</p>
            </div>
          </Link>
        </div>
        <div className="bg-base-200 h-64 rounded shadow-md ">
          <img className="w-28 h-28 mx-auto p-4" src={app}></img>
          <h3 className="text-center py-2 font-bold md:text-xl">
            Apps Development
          </h3>
          <p className="text-center font-medium text-slate-500 px-2">
            We will provide Apps Development services by experienced Apps
            developers.
          </p>
          <Link>
            <div className="flex justify-center items-center gap-2 mt-4">
              <FaArrowAltCircleRight className="text-blue-500"></FaArrowAltCircleRight>
              <p className="text-center font-medium text-blue-500">See More</p>
            </div>
          </Link>
        </div>
        <div className="bg-base-200 h-64 rounded shadow-md">
          <img className="w-28 h-28 mx-auto p-4" src={IT}></img>
          <h3 className="text-center py-2 font-bold md:text-xl">IT Services</h3>
          <p className="text-center font-medium text-slate-500 px-2">
            We will provide IT services by experienced IT professionals.
          </p>
          <Link>
            <div className="flex justify-center items-center gap-2 mt-4">
              <FaArrowAltCircleRight className="text-blue-500"></FaArrowAltCircleRight>
              <p className="text-center font-medium text-blue-500">See More</p>
            </div>
          </Link>
        </div>
        <div className="bg-base-200 h-64 rounded shadow-md">
          <img className="w-28 h-28 mx-auto p-4" src={marketing}></img>
          <h3 className="text-center py-2 font-bold md:text-xl">
            Digital Marketing
          </h3>
          <p className="text-center font-medium text-slate-500 px-2">
            We will provide Digital Marketing services by experienced Marketing
            Employees.
          </p>
          <Link>
            <div className="flex justify-center items-center gap-2 mt-4">
              <FaArrowAltCircleRight className="text-blue-500"></FaArrowAltCircleRight>
              <p className="text-center font-medium text-blue-500">See More</p>
            </div>
          </Link>
        </div>
        <div className="bg-base-200 h-64 rounded shadow-md">
          <img className="w-28 h-28 mx-auto p-4" src={graphics}></img>
          <h3 className="text-center py-2 font-bold md:text-xl">
            Graphics Design
          </h3>
          <p className="text-center font-medium text-slate-500 px-2">
            We will provide Graphics Design services by experienced Graphics
            Designers.
          </p>
          <Link>
            <div className="flex justify-center items-center gap-2 mt-4">
              <FaArrowAltCircleRight className="text-blue-500"></FaArrowAltCircleRight>
              <p className="text-center font-medium text-blue-500">See More</p>
            </div>
          </Link>
        </div>
        <div className="bg-base-200 h-64 rounded shadow-md">
          <img className="w-28 h-28 mx-auto p-4" src={UI}></img>
          <h3 className="text-center py-2 font-bold md:text-xl">
            UI/UX Design
          </h3>
          <p className="text-center font-medium text-slate-500 px-2">
            We will provide UI/UX design services by experienced UI/UX
            designers.
          </p>
          <Link>
            <div className="flex justify-center items-center gap-2 mt-4">
              <FaArrowAltCircleRight className="text-blue-500"></FaArrowAltCircleRight>
              <p className="text-center font-medium text-blue-500">See More</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
