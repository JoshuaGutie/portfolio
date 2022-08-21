import "./css/nav.css";
import { Button } from "@mui/material";
import { useSpring, animated as a} from 'react-spring'
import jay from "./img/jay.svg"


function Logo() {
    const props = useSpring({
      to: { opacity: 1, x:0 },
      from: { opacity: 0, x:-40 },
      config:{friction:10},
      delay: 1000,
    })
  
    return <a.div style={props}className="mobileJay"><img src={jay} /></a.div>
}

function Nav() {
  return (
    <div className="mobileNavContainer">
      <Logo />
    </div>
  );
}

export default Nav;
