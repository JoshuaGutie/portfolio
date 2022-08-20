import "./css/nav.css";
import { Button } from "@mui/material";
import { useSpring, animated as a} from 'react-spring'
import jay from "./img/jay.svg"


function Links() {
  const props = useSpring({
    to: { opacity: 1, y:0 },
    from: { opacity: 0, y:-40 },
    config:{friction:10},
    delay: 1000,
  })

  return <a.div style={props} className="links">
        <a href="https://github.com/JoshuaGutie?tab=repositories">About</a>
        <a href="https://github.com/JoshuaGutie?tab=repositories">Projects</a>
        <a href="https://github.com/JoshuaGutie?tab=repositories">Contact</a>
        <Button
          sx={{
            height:"45px",
            fontSize:"1.5em",
            color: "#FFFF",
            backgroundColor:"#B88E1B",
            margin:"auto"
          }}
        >
          Resume
        </Button>
      </a.div>
}

function Logo() {
    const props = useSpring({
      to: { opacity: 1, x:0 },
      from: { opacity: 0, x:-40 },
      config:{friction:10},
      delay: 1000,
    })
  
    return <a.div style={props} className="jay"><img src={jay} /></a.div>
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
