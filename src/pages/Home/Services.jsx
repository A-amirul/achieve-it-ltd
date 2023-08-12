import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import IT from "../../assets/IT.png";
import UI from "../../assets/UI.png";
import app from "../../assets/app.png";
import graphics from "../../assets/graphics.png";
import marketing from "../../assets/marketing.png";
import web from "../../assets/web.png";

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
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
              <p className="text-center font-medium text-blue-500" onClick={() => window.my_modal_1.showModal()}>See More</p>
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
              <p className="text-center font-medium text-blue-500" onClick={() => window.my_modal_1.showModal()}>See More</p>
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
              <p className="text-center font-medium text-blue-500" onClick={() => window.my_modal_1.showModal()}>See More</p>
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
              <p className="text-center font-medium text-blue-500" onClick={() => window.my_modal_1.showModal()}>See More</p>
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
              <p className="text-center font-medium text-blue-500" onClick={() => window.my_modal_1.showModal()}>See More</p>
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
              <p className="text-center font-medium text-blue-500" onClick={() => window.my_modal_1.showModal()}>See More</p>
            </div>
          </Link>
        </div>
      </div>
      <div>

      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
      </div>
    </div>
  );
};

export default Services;
