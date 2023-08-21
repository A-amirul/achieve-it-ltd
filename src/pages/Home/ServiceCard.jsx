/* eslint-disable react/prop-types */
import { FaArrowAltCircleRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service, setModalInfo }) => {
  // eslint-disable-next-line react/prop-types
  const { name, image, description } = service;

  return (
    <>
      <div className="hover:text-white ">
        <div className="border-2  mx-5  md:mx-0  bg- pt-14 pb-20 shadow-xl  hover:shadow-2xl hover:bg-blue-700  rounded-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-20 duration-500">
          <div className="w-48 h-48 mx-auto p-1 object-center border-2 rounded-full bg-gray-200  ">
            <img className="w-36 h-32 mx-auto mt-7 " src={image}></img>
          </div>

          <h3 className="text-center py-2 font-bold md:text-xl text-accent ">
            {name}
          </h3>
          <p className="text-center font-medium px-2 ">
            {description?.slice(0, 80)}
          </p>

          <div>
            <button
              className="w-full mx-auto"
              onClick={() => {
                window.my_modal_1.showModal();
                setModalInfo(service);
              }}
            >
              <div className="flex justify-center items-center  gap-2 mt-4 hover:bg-grey-600">
                <span className="px-2 py-2 bg-gray-200 text-xl rounded-full">
                  <FaArrowAltCircleRight className="text-blue-500 "></FaArrowAltCircleRight>
                </span>
                <p className="text-center font-bold hover:underline hover:text-2xl   ">
                  Learn More
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
