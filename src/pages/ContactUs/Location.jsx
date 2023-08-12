import location from "../../assets/ContactUs/location.png";
// import logo from "../../assets/ContactUs/logo.png";
import logo from "../../assets/ContactUs/logo2.png";

const Location = () => {
  return (
    <div>
      <div className="">
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <div className="flex items-center justify-center mb-20 gap-10">
        <img className=" w-20 h-20" src={location} alt="" />
        <p>
          {" "}
          <span className="text-2xl font-bold">Natural Madina Tower,</span>{" "}
          <br /> East Vatara (Sayeed Nagor), <br /> 100 Feet, <br /> Gulshan,
          Vatara, Dhaka
        </p>
      </div>
    </div>
  );
};
export default Location;
