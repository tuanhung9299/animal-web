import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import logo from "../assets/images/logo.png";

const mainNav = [
  {
    display: "HOME",
    path: "/HomeRouter/Home",
  },
  {
    display: "NEWS",
    path: "/HomeRouter/News",
  },
  {
    display: "CONTACT",
    path: "/HomeRouter/contact",
  },
  // {
  //   display: "LOGOUT TEST",
  //   path: "/",
  // },
];

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Link className="header__LogoContainer" to="/HomeRouter/Home">
        <img src={logo} alt="" />
      </Link>
      <div className="header__OptionsContainer">
        {mainNav.map((item, index) => (
          <div key={index}>
            <Link className="header__OptionLink" to={item.path}>
              {" "}
              {item.display}
            </Link>
          </div>
        ))}
        <button
          onClick={()=>navigate("/", {replace: true})}
          className="header__OptionLink"
          to="/"
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Header;
