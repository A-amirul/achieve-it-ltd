import { FaBusinessTime, FaCloudflare, FaDatabase, FaDesktop, FaFolder } from "react-icons/fa";


const FocusAreas = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold text-center">
        Active IT Limited Services
      </h1>
      <p className="w-4/5 text-center mx-auto mt-3">
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
            <h1 className="text-2xl font-bold hover:text-blue-700">
              Cloud Integration
            </h1>
            <p className="w-72 mt-5">
              Eiusmod sed incididunt labore dolore magna sed aliquatenim minim
              veniam ipsum nostrud exercitation.
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="text-5xl">
            <span className=" "><FaDesktop></FaDesktop></span>
          </div>
          <div>
            <h1 className="text-2xl font-bold hover:text-blue-700">
            Product Engineering
            </h1>
            <p className="w-72 mt-5">
              Eiusmod sed incididunt labore dolore magna sed aliquatenim minim
              veniam ipsum nostrud exercitation.
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="text-5xl">
            <FaBusinessTime></FaBusinessTime>
          </div>
          <div>
            <h1 className="text-2xl font-bold hover:text-blue-700">
            Business Security
            </h1>
            <p className="w-72 mt-5">
              Eiusmod sed incididunt labore dolore magna sed aliquatenim minim
              veniam ipsum nostrud exercitation.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="flex gap-8">
          <div className="text-5xl">
            <FaFolder></FaFolder>
          </div>
          <div>
            <h1 className="text-2xl font-bold hover:text-blue-700">
              Cloud Integration
            </h1>
            <p className="w-72 mt-5">
              Eiusmod sed incididunt labore dolore magna sed aliquatenim minim
              veniam ipsum nostrud exercitation.
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="text-5xl">
            <span className=" "><FaDatabase></FaDatabase></span>
          </div>
          <div>
            <h1 className="text-2xl font-bold hover:text-blue-700">
            Product Engineering
            </h1>
            <p className="w-72 mt-5">
              Eiusmod sed incididunt labore dolore magna sed aliquatenim minim
              veniam ipsum nostrud exercitation.
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="text-5xl">
            <FaBusinessTime></FaBusinessTime>
          </div>
          <div>
            <h1 className="text-2xl font-bold hover:text-blue-700">
            Business Security
            </h1>
            <p className="w-72 mt-5">
              Eiusmod sed incididunt labore dolore magna sed aliquatenim minim
              veniam ipsum nostrud exercitation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FocusAreas;
