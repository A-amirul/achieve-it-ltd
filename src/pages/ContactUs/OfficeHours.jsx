import calender from "../../assets/ContactUs/calender.png";
const OfficeHour = () => {
  return (
    <div className="bg-white py-20"> 
    <div className="">
        <h1 className="text-4xl font-bold text-center">Office Hours</h1>
      </div>    
    <div className="my-10 flex-row md:flex md:gap-20 items-center justify-center ">
      <img className="rounded-xl shadow-2xl" src={calender} alt="" />
      <div className="mt-5">
        <h3 className="text-xl md:text-2xl"> <span className=" font-bold">Operations:</span> Saturday to Thursday, 9 am to 7 PM</h3>
        <h3 className="text-xl md:text-2xl mt-2">
          <span className=" font-bold">New Clients:</span> We’ll reply within a few hours during business hours.
        </h3>
        <h3 className="text-xl md:text-2xl mt-2">
          <span className=" font-bold">Existing Clients:</span> Please directly call/email your account manager.
        </h3>
        <h3 className="text-xl md:text-2xl mt-2">
          <span className=" font-bold ">Email:</span> <span className="underline text-blue-400">achieveitltd@gmail.com</span>
        </h3>
        <h3 className="text-xl md:text-2xl mt-2">
          <span className=" font-bold ">Phone Number:</span> +880 1614560560
          </h3>
      </div>
    </div>
    </div>
  );
};
export default OfficeHour;
