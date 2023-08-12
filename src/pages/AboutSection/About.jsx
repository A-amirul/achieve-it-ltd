import image4 from "../../assets/AboutSection/image4.png";

const About =() =>{
    return (
      <div className="flex-row md:flex gap-10 items-center">
        <div className="w-full mx-auto md:w-1/3 ">
          <img className="h-60 w-72 mx-auto" src={image4} alt="" />
        </div>
        <div className="px-5 mt-5 text-justify md:w-2/3">
          <p>
            Our mission is to provide innovative, scalable, and reliable IT
            solutions that drive business growth, enhance efficiency, and create
            exceptional user experiences. We are dedicated to pushing the
            boundaries of technology to help our clients stay ahead of the
            competition. <br /> <span className="font-bold">Mrs. Sultan Jerin Anjum (CEO)</span>
          </p>
        </div>
      </div>
    );
}
export default About;