import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
const Header = () => {
  const navOptions = (
    <>
      <li>
        <Link to={`http://localhost:5173/`}>Home</Link>
      </li>

      <li>
        <Link to={`http://localhost:5173/about`}>About Us</Link>
      </li>
      <li>
      <details className="dropdown ">
  <summary className=" ">Company</summary>
  <ul className="p-2 shadow menu dropdown-content absolute z-[1] bg-base-100 rounded-box w-52">
    <li><a>Gallary</a></li>
    <li><a>Testimonials</a></li>
    <li><a>Teams</a></li>
    <li><a>Pricings</a></li>
  </ul>
</details>
      </li>
      <li>
        <Link to="/blog">Blog Section</Link>
      </li>
      <li>
        <Link to={`http://localhost:5173/contact`}>Contact US</Link>
      </li>
      <li>
        <Link to="/ComingSoon">Career</Link>
      </li>
    </>
  );

  return (
    <div className="bg- w-full">
      <div className=" ">
        <div className="navbar  max-w-screen-xl mx-auto z-10  text-black px-8">
          <div className="navbar-start">
            <div className="dropdown px-2">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 hover:bg-base-200 text-black rounded-box w-52 font-medium"
              >
                {navOptions}
              </ul>
            </div>
            <Link to="/" className="font-bold text-xl">
              <img
                className="mx-auto bg-blue-900"
                style={{ width: "100px", height: "80px" }}
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-2  font-semibold">
              {navOptions}
            </ul>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
