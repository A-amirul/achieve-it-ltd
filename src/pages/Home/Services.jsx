import { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";

const Services = () => {
  const [services, setServices]=useState();

  useEffect(()=>{
    fetch('./services.json')
    .then(res=>res.json())
    .then(data=>setServices(data))


  },[])

  return (

    <div className="max-w-screen-xl mx-auto mt-10">
      <h3 className="md:text-4xl font-semibold text-center">Our Services {services?.length}</h3>
      <p className="text-slate-500 text-center my-2 font-medium">
        know, What kind of services we are offering
      </p>
      

      <div className="grid md:grid-cols-3 gap-4 my-10">
        {
          services?.map(service=><ServiceCard
          key={service.id}
         service={service}
          ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
