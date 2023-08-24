import { FaLaptopCode, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";


const CurrentJobOpenings = () => {
    return (
        <div className="mx-auto max-w-screen-xl py-20 px-5">
            <h1 className="text-3xl font-bold text-center">Current Job Openings</h1>
            <p className="text-center text-lg mt-3">Don’t work for money, work for yourself. Join us, be a part of the fun ride.</p>
            <div className="flex-row md:flex items-center justify-between mt-10 md:mt-20 bg-white py-10 px-5 rounded-lg shadow-2xl">
                <div>
                    <h2 className="text-2xl font-bold">Experienced Web Developer (With Freelancing Marketplace working experience)</h2>
                    <div className="flex-row md:flex gap-5 mt-5">
                        <p className="flex items-center gap-2"><span><FaLaptopCode></FaLaptopCode></span> <span>Web Developer</span></p>
                        <p className="flex items-center gap-2"><span><FaRegClock></FaRegClock></span> <span><span className="text-red-600">Deadline:</span> 31 August 2023</span></p>
                        <p className="flex items-center gap-2"><span><FaMapMarkerAlt></FaMapMarkerAlt></span> <span>Natural Madina Tower</span></p>
                    </div>
                </div>
                <div className="mt-10 md:mt-0">
                    <Link to={'/jobPost'} className="text-lg font-bold text-white px-4 py-3 bg-sky-500 rounded-xl shadow-2xl hover:bg-sky-800 ">Job Details</Link>
                </div>
            </div>
            <div className="flex-row md:flex items-center justify-between mt-10 md:mt-20 bg-white py-10 px-5 rounded-lg shadow-2xl">
                <div>
                    <h2 className="text-2xl font-bold">Senior Developer</h2>
                    <div className="flex-row md:flex gap-5 mt-5">
                        <p className="flex items-center gap-2"><span><FaLaptopCode></FaLaptopCode></span> <span>Senior Web Developer</span></p>
                        <p className="flex items-center gap-2"><span><FaRegClock></FaRegClock></span> <span><span className="text-red-600">Deadline:</span> 10 September 2023</span></p>
                        <p className="flex items-center gap-2"><span><FaMapMarkerAlt></FaMapMarkerAlt></span> <span>Natural Madina Tower</span></p>
                    </div>
                </div>
                <div className="mt-10 md:mt-0">
                    <Link to={'/seniorDeveloper'} className="text-lg font-bold text-white px-4 py-3 bg-sky-500 rounded-xl shadow-2xl hover:bg-sky-800 ">Job Details</Link>
                </div>
            </div>
            <div className="flex-row md:flex items-center justify-between mt-10 md:mt-20 bg-white py-10 px-5 rounded-lg shadow-2xl">
                <div>
                    <h2 className="text-2xl font-bold">UI/UX Designer</h2>
                    <div className="flex-row md:flex gap-5 mt-5">
                        <p className="flex items-center gap-2"><span><FaLaptopCode></FaLaptopCode></span> <span>UI/UX Designer</span></p>
                        <p className="flex items-center gap-2"><span><FaRegClock></FaRegClock></span> <span><span className="text-red-600">Deadline:</span> 05 September 2023</span></p>
                        <p className="flex items-center gap-2"><span><FaMapMarkerAlt></FaMapMarkerAlt></span> <span>Natural Madina Tower</span></p>
                    </div>
                </div>
                <div className="mt-10 md:mt-0">
                    <Link to={'/UXDesigner'} className="text-lg font-bold text-white px-4 py-3 bg-sky-500 rounded-xl shadow-2xl hover:bg-sky-800 ">Job Details</Link>
                </div>
            </div>
            <p className="text-center text-lg mt-20">Don’t see an opportunity that fits? Don’t worry.. We are rapidly expanding. Stalk us on <Link to={'https://www.facebook.com/profile.php?id=100094647446276'} className="text-blue-800 font-bold">Facebook</Link> or <Link to={'https://www.linkedin.com/company/96591798/admin/feed/posts/'} className="text-blue-800 font-bold">LinkedIn</Link> for new opportunities.</p>
        </div>
    );
};

export default CurrentJobOpenings;