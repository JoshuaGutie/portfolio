import "./css/home.css";
import { useSpring, animated as a} from 'react-spring'
import AnimatedLogo from "./AnimatedLogo";

function SVG() {
    const { x } = useSpring({
      from: { x: 0 },
      x: 1,
      delay: 500,
      damping:1,
    });
   
    return (
      <a.svg
        style={{ margin: "auto", width: 300, height: 300 }}
        viewBox="0 0 170 281" fill="none"
        strokeWidth="2"
        stroke="#D6AA32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={1000}
        strokeDashoffset={x.to(x => (1 - x) * 1000)}>
            
     
        <path
          d="M169.6 0.599976V184.6C169.6 196.067 168.067 207.533 165 219C162.067 230.333 157 240.667 149.8 250C142.733 259.2 133.133 266.6 121 272.2C108.867 277.8 93.7333 280.6 75.6 280.6C62.1333 280.6 48.8667 278.467 35.8 274.2C22.8667 269.933 10.9333 263.733 0 255.6L15.4 232.6C27.4 240.067 38.3333 245.133 48.2 247.8C58.0667 250.333 67.0667 251.6 75.2 251.6C94.4 251.6 109.133 245.467 119.4 233.2C129.8 220.933 135 204.067 135 182.6V29H53.4V0.599976H169.6Z"
        />
      </a.svg>
    );}
  

function Hello() {
    const props = useSpring({
      to: { opacity: 1, x:0 },
      from: { opacity: 0, x:-250 },
      config:{friction:56, bounce:1, tension:250},
      delay: 500,
    })
 
    return <a.span style={props} className="hello">Hello! My name is,</a.span>
}

function FadeJosh() {
    const props = useSpring({
      to: {opacity: 1, y:0 },
      from: { opacity: 0, y:20 },
      config:{friction:50, tension:250},
      delay: 800,
    })
    return  <a.h1 style={props} className="name">Joshua Gutierrez</a.h1>

}

function FadeDesc() {
    const props = useSpring({
      to: { opacity: 1, y:0 },
      from: { opacity: 0, y:20 },
      config:{friction:50, tension:250},
      delay: 1000,
    })
    return <a.span style={props} className="desc">
          I’m a self taught web developer, specializing in designing and creatng
          Beautiful and accessible front end expiriences
        </a.span>
}

function Home() {
  return (
    <div className="homeContainer" id="home">
      <div className="textContainer">
        <Hello />
        <FadeJosh/>
        <FadeDesc />
      </div>
      <AnimatedLogo />
    </div>
  );
}

export default Home;
