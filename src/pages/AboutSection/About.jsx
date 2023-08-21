import md from "../../assets/images/MD.jpg";
import chairman from "../../assets/images/images__9_-removebg-preview.png";

const About = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl py-10">
        <h1 className="text-4xl mt-16  font-semibold pl-5 md:pl-0 mx-auto mb-10  w-48 border-y-4 border-indigo-500">
          ABOUT US
        </h1>

        <div className="flex-row md:flex gap-10 items-center rounded-s-full  bg-[#eed5af] py-8">
          <div className="w-full mx-auto md:w-1/3   ">
            <img
              className="h-60 w-72 mx-auto border-2 object-contain shadow-2xl rounded-xl bg-white"
              src={chairman}
              alt=""
            />
          </div>
          <div className="px-5 mt-5 text-justify md:w-2/3">
            <p>
              Our mission is to provide innovative, scalable, and reliable IT
              solutions that drive business growth, enhance efficiency, and
              create exceptional user experiences. We are dedicated to pushing
              the boundaries of technology to help our clients stay ahead of the
              competition. In a world driven by technology, we have the chance
              to make a difference. Our team's dedication and expertise will
              drive us to create solutions that redefine what's possible. I'm
              grateful to everyone who's been a part of this journey – our team,
              partners, and supporters. Your contributions have been invaluable.
            </p>
            <p className="font-bold text-lg mt-2">Mrs. Sultana Jerin Anjum</p>
            <p className="text-sm text-gray-600 font-semibold">
              Chairman of Achieve IT Ltd.
            </p>
          </div>
        </div>
      </div>

      {/* MD Section */}
      <div className="mx-auto max-w-screen-xl py-10 ">
        <div className="flex-row md:flex gap-10 items-center rounded-e-full  bg-[#afcaee] py-8">
          <div className="px-5 mt-5 text-justify md:w-2/3">
            <p>
              Assalamualikum, I'm thrilled to share our journey and vision.
              We're not just about code; we're about crafting solutions. Our
              team turns ideas into innovation, leveraging technology's power to
              drive progress. We're not just developers; we're partners,
              dedicated to your success.In a rapidly changing world, we're at
              the forefront of innovation, embracing new technologies and
              challenges. Our aim is simple: to create positive change through
              software that matters.To our team, clients, and visitors, thank
              you for being part of our story. Explore our offerings, expertise,
              and commitment to a better digital future.Welcome to our digital
              home. Welcome to innovation. Welcome to our software company.
            </p>
            <p className="font-bold text-lg mt-2">Md Fazley Rabbi</p>
            <p className="text-sm text-gray-600 font-semibold">
              M.D Achieve IT Ltd.
            </p>
          </div>
          <div className="w- mx-auto md:w-1/3  ">
            <img
              className="h-60 w-64   border-2  shadow-2xl  bg-white"
              src={md}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
