import React from 'react';
import logo1 from "../../assets/logo/love.png"
import logo2 from "../../assets/logo/fire.png"
import logo3 from "../../assets/logo/rocket-sharp.png"
const Become = () => {
    return (
        <div>
            <h1>Become one of us</h1>
            <div className='w-60'>
                <img className='h-24' src={logo1} alt="logo" />
                <h1 className='text-[#F7B006]'>Your Satisfaction</h1>
                <p>We are an Information and Communication Technology (ICT) company specialized in the design and development of management systems. We combine vertical market expertise with the advantages from innovative technologies, such as Big Data, Social Networking, Cloud Computing, to optimize and integrate processes, applications and devices for customer service.</p>
            </div>
        </div>
    );
};

export default Become;