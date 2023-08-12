import { FaArrowAltCircleRight } from "react-icons/fa";

const ServiceCard = (service) => {
  const { name, image, description } = service.service;

  return (
    <div>
      <div className="bg-base-200 h-64 rounded shadow-md">
        <img className="w-28 h-28 mx-auto p-4" src={image}></img>
        <h3 className="text-center py-2 font-bold md:text-xl">{name}</h3>
        <p className="text-center font-medium text-slate-500 px-2">
          {description?.slice(0, 80)}
        </p>

        <button>
          <div className="flex justify-center items-center gap-2 mt-4 hover:bg-grey-600">
            <FaArrowAltCircleRight className="text-blue-500"></FaArrowAltCircleRight>
            <p className="text-center font-medium text-blue-500">Learn More</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
