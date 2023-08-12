import OfficeHour from "./OfficeHours";
import UserInfo from "./UserInfo";
const ContactUs = () => {
  return (
    <div className=" mx-auto max-w-screen-xl h-full px-5 md:px-0">
       <div className="mt-10">
        <h1 className="text-4xl font-bold text-center">Office Hours</h1>
      </div>
        <OfficeHour></OfficeHour>
         <div className="pb-10">
          <UserInfo></UserInfo>
         </div>
     
    </div>
  );
};
export default ContactUs;
