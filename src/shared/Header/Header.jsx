import {NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import './Header.css'
const Header = () => {
  const navOptions = (
    <>
      <div className="md:flex items-center">
        <div className="md:mr-[10px]">
          <li>
            <a>
              <img className="w-24 h-20" src={logo} alt="" />
            </a>
          </li>
        </div>

        <div className="md:flex md:mx-[300px]">
          <li>
            <NavLink to={`/`} >
              {({ isActive }) => (
                <span className={isActive ? "active" : ""}>Home</span>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink to={`/about`}>
              {({ isActive }) => (
                <span className={isActive ? "active" : ""}>About Us</span>
              )}
            </NavLink>
          </li>
          <li>
            <details className="dropdown dropdown-hover">
              <summary tabIndex={0}>Company</summary>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu shadow bg-blue-600 text-white rounded-box w-52"
              >
                <li>
                  <NavLink to={`/gallery`}>
                    {({ isActive }) => (
                      <span className={isActive ? "active" : ""}>Gallery</span>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/teams`}>
                    {({ isActive }) => (
                      <span className={isActive ? "active" : ""}>Teams</span>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/testimonials`}>
                    {({ isActive }) => (
                      <span className={isActive ? "active" : ""}>
                        Testimonials
                      </span>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/pricing`}>
                    {({ isActive }) => (
                      <span className={isActive ? "active" : ""}>Pricing</span>
                    )}
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink to={`/blog`}>
              {({ isActive }) => (
                <span className={isActive ? "active" : ""}>Blog Section</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={`/contact`}>
              {({ isActive }) => (
                <span className={isActive ? "active" : ""}>Contact US</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={`/career`}>
              {({ isActive }) => (
                <span className={isActive ? "active" : ""}>Career</span>
              )}
            </NavLink>
          </li>
        </div>
      </div>
    </>
  );

  return (
    <div className="sticky z-10 navbar bg-gradient-to-t from-blue-700 to-teal-500 font-semibold text-lg py-0">
      <div className=" navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden w-[300px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              
              className="h-5 w-5 text-white "
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
            <p className="text-white pl-6">Achieve IT Limited</p>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] bg-teal-700 p-2 shadow text-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
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
