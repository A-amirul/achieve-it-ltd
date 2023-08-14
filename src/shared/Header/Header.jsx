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
        <details className="dropdown dropdown-hover">
          <summary tabIndex={0}>Company</summary>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu mt-28 shadow bg-blue-600 text-white rounded-box w-52"
          >
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
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
    <div className="navbar bg-blue-500  font-semibold text-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className=" ">
          <img className="w-24 h-24" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base-100">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
};

export default Header;
