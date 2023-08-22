import { Link } from "react-router-dom";

const JobPost = () => {
  return (
    <div className="mx-auto max-w-screen-xl py-20 px-5">
      <p className="text-lg font-bold tracking-widest text-center mt-16">
        WE ARE LOOKING FOR
      </p>
      <h1 className="mt-5 text-2xl text-center font-bold ">
        Experienced Web Developer (With Freelancing Marketplace working
        experience)
      </h1>
      <div className="flex mx-auto w-96 justify-between mt-8">
        <p className="text-xl ">
          <span className="font-bold">Job Type:</span> Full-Time
        </p>
        <p className="text-xl">
          <span className="font-bold">No of Vacancy:</span> 02
        </p>
      </div>
      <div className="px-5">
        <h3 className="text-xl font-bold underline mb-5 mt-10">
          *Responsibilities: *
        </h3>
        <ul className="list-disc leading-loose">
          <li>Develop and maintain web applications.</li>
          <li>
            Collaborate with cross-functional teams to define, design, and ship
            new features.
          </li>
          <li>Git branch management.</li>
          <li>
            Write clean, scalable, and efficient code while adhering to coding
            standards and best practices.
          </li>
          <li>
            Participate in code reviews to ensure code quality and provide
            constructive feedback.
          </li>
          <li>
            Troubleshoot and debug issues, identify bottlenecks, and propose
            solutions.
          </li>
          <li>
            Stay up-to-date with emerging technologies and industry trends.
          </li>
          <li className="font-bold">
            Must having well communication &amp; client handling experience.
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
            Strong proficiency in React js, Next js, Node js, tailwind css,
            Mongo DB, Redux with must be 1-2 years’ professional experience.
          </li>
          <li>
            Solid understanding of JavaScript, HTML, CSS, and related web
            technologies.
          </li>
          <li>
            Understanding of speed up &amp; optimize the website (Page Speed),
            basic SEO optimization.
          </li>
          <li>Able to integrate RESTful APIs.</li>
          <li>Write clean, well-organized, and reusable code.</li>
          <li>Collaborate with the backend developer.</li>
          <li>
            Proficient in server-side technologies such as Express.js and
            Node.js.
          </li>
          <li>
            Experience with databases, including MongoDB or other databases.
          </li>
          <li>
            Familiarity with RESTful APIs and asynchronous request handling.
          </li>
          <li>Knowledge of version control systems.</li>
          <li>
            Strong problem-solving skills and the ability to work independently
            or collaboratively.
          </li>
          <li>Excellent communication and teamwork skills.</li>
          <li className="font-bold">
            Must be have Freelancing Market place (Fiverr, Upwork etc.) working
            experience at least 2 Years.
          </li>
          <li>N. B: (Working Hour 9:00 pm- 6:00 am, Night Shift, No Remote)</li>
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
            <span className="font-bold"> [achieveitcv@gmail.com]</span>. Please mention &quot;Application for Full
            Stack Experienced Developer&quot; in the subject line.
          </li>
        </ul>
      </div>
      <div className="text-center">
        <Link to={'https://docs.google.com/forms/d/e/1FAIpQLScjDaTeZmDh9SiaUhh_en6knJTVvH5yVRjsS7U-hnAq9oe32w/viewform?usp=sf_link'}>
        
        <button className="bg-sky-600 hover:bg-sky-800 text-white py-3 px-5 rounded-lg shadow-2xl mt-16 font-bold">Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default JobPost;
