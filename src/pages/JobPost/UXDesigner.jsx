import { Link } from "react-router-dom";

const UXDesigner = () => {
  return (
    <div className="mx-auto max-w-screen-xl py-20 px-5">
      <p className="text-lg font-bold tracking-widest text-center mt-16">
        WE ARE LOOKING FOR
      </p>
      <h1 className="mt-5 text-2xl text-center font-bold ">UI/UX Designer</h1>
      <div className="flex mx-auto w-1/2 justify-between mt-8">
        <p className="text-xl ">
          <span className="font-bold">Job Type:</span> Full-Time
        </p>
        <p className="text-xl">
          <span className="font-bold">No of Vacancy:</span> 02
        </p>
      </div>
      <div className="flex mx-auto w-1/2 justify-between mt-2">
        <p className="text-xl ">
          <span className="font-bold">Experience:</span> More than 1+ years
        </p>
        <p className="text-xl">
          <span className="font-bold">Salary:</span> 15k-25k.
        </p>
      </div>
      <div className="px-5">
        <h3 className="text-xl font-bold underline mb-5 mt-5">
          * About the Role *
        </h3>
        <p className="text-justify">We are looking for a UI/UX Designer who is motivated to combine the art of design with the art of programming. Responsibilities will include designing the UI/UX for a wide range of user-facing products - web, mobile and other digital surfaces. As a UI/UX Designer, you will work with the UI/UX and Frontend engineering team and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works. Delivering the most pleasing user experiences through superb graphical interfaces will be your only northstar.</p>
      </div>
      <div className="px-5">
        <h3 className="text-xl font-bold underline mb-5 mt-5">
          *Responsibilities: *
        </h3>
        <ul className="list-disc leading-loose">
          <li>Gather and evaluate user requirements in collaboration with product managers and engineers.</li>
          <li>
          Research and analyze user needs, goals, behaviors, and pain points.
          </li>
          <li>Develop UI mock-ups and prototypes that clearly illustrate how sites/apps function and look like.</li>
          <li>
          Creating site maps, wireframes, or prototypes using visual or interface elements to have a better idea of the final product.
          </li>
          <li>
          Validating the design by tracking how real users interact with the product or service (usability testing). Identify any problems with the design and develop solutions.
          </li>
          <li>
          Adhere to style standards on fonts, colors, and images.
          </li>
          <li>
          Perform other duties and/or special projects as assigned.
          </li>
          <li className="font-bold">
            Must having well communication &amp; client handling experience.
          </li>
        </ul>
      </div>
      <div className="px-5">
        <h3 className="text-xl font-bold underline mb-5 mt-10">
          *Skill Required: *
        </h3>
        <ul className="list-disc leading-loose">
          <li>
          Strong skills in Figma. You should know how to work with components and have the ability to create low and high-fidelity prototypes.
          </li>
          <li>Strong understanding of design best practices.</li>
          <li>Knowledge of adobe products like Photoshop, and Illustrator.</li>
          <li>Excellent capabilities across multiple wire-framing/design tools.</li>
          <li>Deliver pixel-perfect designs based on needs.</li>
          <li>Ability to build sitemaps, wireframes, and prototypes to outline the structure.</li>
          <li>Team player, self-motivated, analytical mindset, and creative thinking.</li>
          <li>Identify and troubleshoot UX problems (e.g. responsiveness).</li>
          <li>Ability to conduct competitors research.</li>
          <li>Ability to learn new technologies quickly.</li>
        </ul>
      </div>
      <div className="px-5">
        <h3 className="text-xl font-bold underline mb-5 mt-10">
          *Job Benefits: *
        </h3>
        <ul className="leading-loose list-decimal">
          <li>
            Salary: Negotiable (We will recognize your expertise and
            contributions.)
          </li>
          <li>Festival bonus: 2 times</li>
          <li>Git branch management.</li>
          <li>Tea, coffee unlimited</li>
          <li>Snacks</li>
          <li>Friday holiday per week.</li>
          <li>High job security.</li>
          <li>Good working environment.</li>
        </ul>
      </div>
      <div className="px-5">
        <h3 className="text-xl font-bold underline mb-5 mt-10">
          *How to Apply: *
        </h3>
        <ul className="list-disc leading-loose">
          <li>
            Interested candidates are invited to submit their CV with portfolio
            link &amp; online marketplace account info to
            <span className="font-bold"> [achieveitcv@gmail.com]</span>. Please
            mention &quot;Application for Full Stack Experienced Developer&quot;
            in the subject line.
          </li>
        </ul>
      </div>
      <div className="text-center">
        <Link
          to={
            "https://docs.google.com/forms/d/e/1FAIpQLScjDaTeZmDh9SiaUhh_en6knJTVvH5yVRjsS7U-hnAq9oe32w/viewform?usp=sf_link"
          }
        >
          <button className="bg-sky-600 hover:bg-sky-800 text-white py-3 px-5 rounded-lg shadow-2xl mt-16 font-bold">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UXDesigner;
