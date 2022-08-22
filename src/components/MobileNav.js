import "./css/nav.css";
import React, { Component } from "react";
import { Button } from "@mui/material";
import { useSpring, animated as a} from 'react-spring'
import jay from "./img/jay.svg"
import MenuIcon from "@mui/icons-material/Menu";
import Fab from "@mui/material/Fab";
import {Link} from 'react-scroll'



function Logo() {
    const props = useSpring({
      to: { opacity: 1, x:0 },
      from: { opacity: 0, x:-40 },
      config:{friction:10},
      delay: 1000,
    })
  
    return <a.div style={props}className="mobileJay"><img src={jay} /></a.div>
}

class MobileNav extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
    };
    this.createText = this.createText.bind(this);
  }

  createText() {
    console.log(this.state.isShow);
    if (this.state.isShow === false) {
      this.setState({ isShow: true });
    } else {
      this.setState({ isShow: false });
    }
  }

  render() {
    return (
      <div className="mobileNavContainer">
        <div class="mobileNav">
          <Logo />
          <Fab style={{ margin: "auto 0 auto 0" }}>
            <MenuIcon
              fontSize="large"
              aria-label="save"
              onClick={this.createText}
            />
          </Fab>
        </div>
        {this.state.isShow && (
          <div className="mobileLinks">
            <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
          <li><Link activeClass="active" to="home" spy={true} smooth={true} onClick={this.createText}>About</Link></li>
          <li><Link  to="projects" spy={true} smooth={true} onClick={this.createText}>Projects</Link></li>
          <li><Link  to="contact" spy={true} smooth={true} onClick={this.createText}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default MobileNav;

