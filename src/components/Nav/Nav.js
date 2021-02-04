import { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let scrolListner = window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 150) {
          setShow(true);
        } else {
          setShow(false);
        }
        return () => window.removeEventListener("scroll", scrolListner);
      },
      []
    );
  });
  return (
    <nav
      className="navbar"
      style={{ backgroundColor: show ? "#111" : "transparent" }}
    >
      <img
        alt="Netflix logo"
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      />
      <img
        alt="Account pic"
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
      />
    </nav>
  );
};

export default Nav;
