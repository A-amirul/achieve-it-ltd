import Location from "./Location";

const UserInfo = () => {
  return (

      <div className="bg-[#f0f1f5]">
    <div className="max-w-screen-xl mx-auto flex-row md:flex  items-center justify-center ">
      
 

    <div className="flex-row md:flex mx-auto items-center justify-center">
      <div className="md:w-1/2 ps-6">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>

        <div className="mt-10">
          <div className="flex-row md:flex gap-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  First Name<span className="text-red-500 text-xl">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Fast Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  Last Name<span className="text-red-500 text-xl">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex-row md:flex gap-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  Email<span className="text-red-500 text-xl">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  Phone Number<span className="text-red-500 text-xl">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter Your Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 mr-10 md:mr-0"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <div className="mr-8 md:mr-0">
          <button className="w-full text-xl font-semibold py-3 bg-sky-300 hover:bg-sky-800 hover:text-white mt-5 rounded-lg shadow-xl ">
            Send
          </button>
        </div>
      </div>
      <div className="md:w-1/2 ">
        <Location></Location>
      </div>
      </div>
    </div>
    </div>
  );
};
export default UserInfo;
