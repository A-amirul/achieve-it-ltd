import OfficeHour from "./OfficeHours";
import UserInfo from "./UserInfo";
const ContactUs = () => {
  return (
    <div className=" mx-auto max-w-screen-xl h-full mt-10 px-5 md:px-0">
      
      <UserInfo></UserInfo>
      <div className="mt-16">
        <h1 className="text-5xl font-bold">Office Hours</h1>
        <OfficeHour></OfficeHour>
      </div>
    </div>
  );
};
export default ContactUs;
