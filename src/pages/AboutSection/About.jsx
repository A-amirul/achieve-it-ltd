import image4 from "../../assets/AboutSection/image4.png";

const About =() =>{
    return(
<div className="flex-row md:flex gap-10 items-center">
        <div className="w-full mx-auto md:w-1/3 ">
          <img className="h-60 w-72 mx-auto" src={image4} alt="" />
        </div>
        <div className="px-5 mt-5 text-justify md:w-2/3">
         
        </div>
      </div>
    )
}
export default About;