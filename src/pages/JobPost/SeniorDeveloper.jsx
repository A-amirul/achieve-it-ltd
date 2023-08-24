import { Link } from "react-router-dom";

const SeniorDeveloper = () => {
  return (
    <div className="mx-auto max-w-screen-xl py-20 px-5">
      <p className="text-lg font-bold tracking-widest text-center mt-16">
        WE ARE LOOKING FOR
      </p>
      <h1 className="mt-5 text-2xl text-center font-bold ">
        Senior Web Developer (JavaScript, Nodejs)
      </h1>
      <div className="flex mx-auto w-1/2 justify-between mt-8">
        <p className="text-xl ">
          <span className="font-bold">Job Type:</span> Senior Web Developer
        </p>
        <p className="text-xl">
          <span className="font-bold">No of Vacancy:</span> 02
        </p>
      </div>
      <div className="flex mx-auto w-1/2 justify-between mt-2">
        <p className="text-xl ">
          <span className="font-bold">Experience:</span> More than 3+ years
        </p>
        <p className="text-xl">
          <span className="font-bold">Salary:</span> 40k-60k.
        </p>
      </div>
      <div className="px-5">
        <h3 className="text-xl font-bold underline mb-5 mt-10">
          *Responsibilities: *
        </h3>
        <ul className="list-disc leading-loose">
          <li>
            Design and develop modular, reusable, scalable, and highly
            functioning production-grade software.
          </li>
          <li>Lead the developers together with the product manager.</li>
          <li>
            Coordinating with the software development team in addressing
            technical debt.
          </li>
          <li>
            Understanding project requirements and developing a detailed
            structure.
          </li>
          <li>Handling backend API and server.</li>
          <li>Work both autonomously and collaboratively to complete tasks.</li>
          <li>
            Checking and updating systems and software on a regular basis.
          </li>
          <li>
            Diagnose issues in production and devise solutions for them.
          </li>
          <li>Strong ownership of projects from inception to production.</li>
          <li>Implementing best practices and coding standards.</li>
          <li>
            Troubleshoot and debug issues, identify bottlenecks, and propose
            solutions.
          </li>
        </ul>
      </div>
      <div className="px-5">
        <h3 className="text-xl font-bold underline mb-5 mt-10">
          *Education Requirements: *
        </h3>
        <ul className="list-disc leading-loose">
          <li>
            BSc in CSE/CS/IT or any similar qualification with relevant fields.
          </li>
        </ul>
      </div>
      <div className="px-5">
        <h3 className="text-xl font-bold underline mb-5 mt-10">
          *Requirements: *
        </h3>
        <ul className="list-disc leading-loose">
          <li>
          Proven working experience with Node.js & JavaScript framework (React js, Next js)
          </li>
          <li>
          Hands-on expertise in REST, ExpressJs, Web Socket, MongoDB, Redux etc.
          </li>
          <li>
          Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Having 3+ (at least) years of experience as a tech lead with strong experience coordinating projects with front-end and back-end engineers.</li>
          <li>A clear understanding of OOP and DevOps.</li>
          <li>Experience in creating large-scale databases in MySQL and NoSQL.</li>
          <li>
          User authentication and authorization between multiple systems, servers, and environments.
          </li>
          <li>
          Must be a passionate, self-driven, resourceful, and creative problem solver with a can-do attitude.
          </li>
          <li> Hands-on working experience with Docker and AWS services.</li>
          <li> Understanding of application security.</li>
          <li>
          Attention to detail.
          </li>
          <li>Understanding of speed up & optimize the website (Page Speed).</li>
          <li>
          Write clean, well-organized, and reusable code.
          </li>
          <li>Collaborate with the backend developer.</li>
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

export default SeniorDeveloper;
