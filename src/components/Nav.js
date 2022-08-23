import "./css/nav.css";
import { Button } from "@mui/material";
import { useSpring, animated as a } from "react-spring";
import { Link } from "react-scroll";
import jay from "./img/jay.svg";
import Pdf from "./Resume.pdf";

function Links() {
  const props = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: -40 },
    config: { friction: 10 },
    delay: 1000,
  });

  return (
    <a.div style={props} className="links">
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
        }}
      >

        <li className="underlined" >
          <Link  to="home" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li className="underlined">
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li className="underlined">
          <Link to="projects" spy={true} smooth={true}>
            Projects
          </Link>
        </li>
        <li className="underlined">
          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </li>
        <a className="underlined" href={Pdf} target="_blank" style={{fontSize:"2em", margin:"auto 30px auto auto"}}>
          Resume
        </a>
      </ul>
    </a.div>
  );
}

function Logo() {
  const props = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -40 },
    config: { friction: 10 },
    delay: 1000,
  });

  return (
    <a.div style={props} className="jay">
      <img src={jay} alt="jay" />
    </a.div>
  );
}

function Nav() {
  return (
    <div className="navContainer">
      <Logo />
      <Links />
    </div>
  );
}

export default Nav;
