import Swal from "sweetalert2";
import Location from "./Location";
import { useForm } from "react-hook-form";

const UserInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    Swal.fire({
      title: "success!",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Send",
    });
    console.log(data);
  };

  return (
    <div className="bg-[#f0f1f5]">
      <div className=" flex-row md:flex  items-center justify-center ">
        <div className="flex-row md:flex  items-center justify-center">
          <form className="md:w-1/2 " onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-4xl font-bold text-center">Contact Us</h1>

            <div className="mt-10 ">
              <div className="flex-row md:flex gap-6">
                <div className="form-control w-[550px]">
                  <label className="label">
                    <span className="label-text">
                      First Name<span className="text-red-500 text-xl">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Fast Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("fastName", { required: true })}
                  />
                  {errors.fastName && (
                    <span className="text-red-500">Fast Name is required</span>
                  )}
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
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <span className="text-red-500">Last name is required</span>
                  )}
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
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500">
                      Email field is required
                    </span>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">
                      Phone Number
                      <span className="text-red-500 text-xl">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="input input-bordered w-full max-w-xs"
                    {...register("phoneNumber", { required: true })}
                  />
                  {errors.phoneNumber && (
                    <span className="text-red-500">Phone number required</span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24 mr-10 md:mr-0 w-[320px] md:w-full"
                  placeholder="Message"
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500">
                    This message field is required
                  </span>
                )}
              </div>
            </div>
            <div className="mr-8 md:mr-0">
              <input
                type="submit"
                className="md:w-full text-xl font-semibold py-3 bg-sky-300 hover:bg-sky-800 hover:text-white mt-5 rounded-lg shadow-xl w-[320px]"
              ></input>
            </div>
          </form>
          <div className="md:w-1/2 ">
            <Location></Location>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
