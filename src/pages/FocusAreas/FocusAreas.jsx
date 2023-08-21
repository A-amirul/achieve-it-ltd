import { FaBusinessTime, FaCloudflare, FaDatabase, FaDesktop,} from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";



const FocusAreas = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-24">
      <h1 className="text-3xl font-bold text-center text-blue-500">
        Active <span className="text-orange-500">IT</span> Limited Services
      </h1>
      <p className="w-4/5 text-center mx-auto my-8">
        Digital Transformation By IT Solutions laboris nisi ut aliquip irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in
        culpa
      </p>
      <div className="grid grid-cols-3">
        <div className="flex gap-8">
          <div className="text-5xl">
            <FaCloudflare></FaCloudflare>
          </div>
          <div>
            <h1 className="text-2xl text-[#083C98] font-bold hover:text-blue-500">
              Cloud Integration
            </h1>
            <p className="w-72 mt-5 text-justify">
     Cloud services are gaining more and more popularity, beyond mere data storage. They are not only budget-friendly and economical (they are scalable, meaning you pay only for the services you need), but are great in terms of performance and efficiency as well.
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="text-5xl">
            <span className=" "><FaDesktop></FaDesktop></span>
          </div>
          <div>
            <h1 className="text-2xl text-[#083C98] font-bold hover:text-blue-500">
            IT Consulting
            </h1>
            <p className="w-72 mt-5 text-justify">
            The IT consulting service providers assess the needs of a business and company to determine which IT pathway would be best for them based on their goals/requirements. Afterward, they may help clients deploy selected IT Services and maintain them..
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="text-5xl">
            <MdOutlineSupportAgent></MdOutlineSupportAgent>
          </div>
          <div>
            <h1 className="text-2xl text-[#083C98] font-bold hover:text-blue-500">
            Digital Marketing
            </h1>
            <p className="w-72 mt-5 text-justify">
            Achieve IT Ltd. is the only agency that does not sell a predefined service package. Rather, DMS creates a unique strategy by combining different digital marketing techniques that best match a business's specific needs. 
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="flex gap-8">
          <div className="text-5xl">
            <GrPersonalComputer></GrPersonalComputer>
          </div>
          <div>
            <h1 className="text-2xl text-[#083C98] font-bold hover:text-blue-500">
              Web Design & Development
            </h1>
            <p className="w-72 mt-5 text-justify">
            Software Development Services has long been the popular choice of many firms as they not only save time for a specific project or task but also allow companies to access more professionals as well as experts at a reasonable cost than in-house development. And in the world where mostly everyone has to work remotely from home, Software Development Services has never been more appealing.
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="text-5xl">
            <span className=" "><FaDatabase></FaDatabase></span>
          </div>
          <div>
            <h1 className="text-2xl text-[#083C98] font-bold hover:text-blue-500">
            Technology training
            </h1>
            <p className="w-72 mt-5 text-justify">
            Since technology and software can change often, helping your team learn how to operate updated devices and software can help them use those tools efficiently with minimal questions. Many IT services include technology training for business teams that use technical tools and resources for everyday operations. In these cases, an IT team can train staff in your company on how to use specific tools, programs and applications.
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="text-5xl">
            <FaBusinessTime></FaBusinessTime>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#083C98]  hover:text-blue-500">
            Software Support
            </h1>
            <p className="w-72 mt-5 text-justify">
            IT services can often include software development processes to create custom applications that fulfill specific business needs. For example, a startup business may rely on its IT service team to create a software application for organizing and maintaining venture capitalist records. In these cases, IT can provide the services you need to develop personalized software and ensure the program's viability through continuous testing, development and maintenance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FocusAreas;
