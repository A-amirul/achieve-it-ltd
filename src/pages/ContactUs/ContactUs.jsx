import OfficeHour from "./OfficeHours";
import UserInfo from "./UserInfo";
const ContactUs = () => {
  return (
    <div className=" h-full px-5 md:px-0">
        <OfficeHour></OfficeHour>
         <div className="pb-10">
          <UserInfo></UserInfo>
         </div>
     
    </div>
  );
};
export default ContactUs;
