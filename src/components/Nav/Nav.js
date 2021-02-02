import { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    function myFunction() {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    }
    window.addEventListener("scroll", myFunction);
    myFunction();
    return () => {
      window.removeEventListener("scroll", myFunction);
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="NetflixLogo"
      />
      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="AvatarIcon"
      />
    </nav>
  );
};

export default Nav;
