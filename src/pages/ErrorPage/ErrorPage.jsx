import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import errorPage from "../../assets/errorPage.json";

const ErrorPage = () => {
  return (
    <section className="bg-gray-500 flex items-center h-screen  ">
      <div className="">
        <Lottie
          className="w-full md:relative"
          animationData={errorPage}
          loop={true}
        />

        <div className="max-w-md mt-8 md:mt-0 text-center md:absolute md:top-[700px] md:left-[450px]">
          <Link
            to="/"
            className="bg-white  px-4 py-2 md:text-xl hover:bg-blue-500 hover:text-white border-2 border-blue-500 rounded-lg font-bold text-blue-400"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
