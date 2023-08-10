import calender from "../../assets/ContactUs/calender.png";
const OfficeHour = () => {
  return (
    <div className="my-10 flex-row md:flex md:gap-20 items-center justify-center">
      <img className="rounded-xl shadow-2xl" src={calender} alt="" />
      <div className="mt-5">
        <h3 className="text-xl md:text-2xl"> <span className=" font-bold">Operations:</span> Saturday to Thursday, 9 am to 10 PM</h3>
        <h3 className="text-xl md:text-2xl"> <span className=" font-bold">Sales:</span> Saturday to Thursday, 7 am to 6 PM</h3>
        <h3 className="text-xl md:text-2xl">
          <span className=" font-bold">New Clients:</span> We’ll reply within a few hours during business hours.
        </h3>
        <h3 className="text-xl md:text-2xl">
          <span className=" font-bold">Existing Clients:</span> Please directly call/email your account manager.
        </h3>
      </div>
    </div>
  );
};
export default OfficeHour;
