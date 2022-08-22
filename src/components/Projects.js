import { useEffect, useRef, useState } from "react";
import { animated as a, useSpring } from "react-spring";
import "./css/about.css";
import arbitor from "./img/arbitor.png";
import ecom from "./img/ecom.png";
import flexible from "./img/flexible.png";
import Vector from "./img/Vector.png";
import web from "./img/web.png";


function useIntersectionObserver(
  elementRef,
  { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false }
) {
  const [entry, setEntry] = useState();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]) => {
    setEntry(entry);
  };

  /*?. enables you to read the value of a property located deep within a chain of connected objects */

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
}

export default function Projects() {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  });
  const textStyle = useSpring({
    config: { duration: 500, friction: 100 },
    from: { opacity: 0, x: -250 },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      x: dataRef?.isIntersecting ? 0 : -250,
    },
  });

  const textStyleRight = useSpring({
    delay: 500,
    config: { duration: 500, friction: 1, mass:100 },
    from: { opacity: 0, x: -250 },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      x: dataRef?.isIntersecting ? 0 : -250,
    },
  });

  const textStyleLast = useSpring({
    delay: 800,
    config: { duration: 500, friction: 1 },
    from: { opacity: 0, x: -250 },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      x: dataRef?.isIntersecting ? 0 : -250,
    },
  });

  console.log(dataRef);

  return (
    <div className="projectsContainer" id="projects">
      <div className="projectsTitle">
        <img src={Vector} className="gitLink" alt="ecom" />/
        <h2 style={{ margin: "auto 0 auto 0" }} className=" h2style text">
          Projects
        </h2>
      </div>
      
      <div ref={triggerRef} />
      <a.div style={textStyleRight} className="projects">
      <img src={flexible} className="projectImg" alt="ecom" />/
        <div className="projectsText">
          <h3
            className="bold"
            style={{
              fontSize: "2.5em",
              margin: "0px",
              position: "relative",
            }}
          >
            MyFlexibleFoods
          </h3>
          <div className="projectsBox">
            <p className="text abText projectInfo">
              A multi-functional 3-1 food management and recipes application.
              Designed to make meal planning and nutrition easy!
            </p>
            <p className="bold projectInfo" style={{ textAlign: "left" }}>
              React -- Express -- Spoonacular API -- Spring JS
            </p>
          </div>
          <div className="linkImgs">
          <a href="https://github.com/JoshuaGutie/flexible-foods" target="_blank" rel="noreferrer">
            <img alt="Git" src={Vector} />
          </a>
          <a href="https://www.myflexiblefoods.com/" target="_blank" rel="noreferrer">
            <img alt="Git" src={web} style={{width:"50px", height:"50px"}} />
          </a>
          </div>
        </div>
      </a.div>

      <a.div style={textStyleLast} className="projects">
        <div className="projectsTextRight">
          <h3
            className="bold"
            style={{
              fontSize: "2.5em",
              margin: "0px",
              position: "relative",
              right: "5vw",
            }}
          >
            Arbiter Roofing
          </h3>
          <div className="projectsBoxRight">
            <p className="text abText projectInfo">
              A multi-functional 3-1 food management and recipes application.
              Designed to make meal planning and nutrition easy.
            </p>
            <p className="bold projectInfo" style={{ textAlign: "left" }}>
              React -- Express -- Spoonacular API -- Spring JS
            </p>
          </div>
          <div className="linkImgsRight">
          <a href="https://github.com/JoshuaGutie/reliable" rel="noreferrer" target="_blank">
            <img alt="Git" src={Vector} />
          </a>
          <a href="https://arbiterroofing.com/" target="_blank" rel="noreferrer">
            <img alt="Git" src={web} style={{width:"50px", height:"50px"}} />
          </a>
          </div>
        </div>
        <img src={arbitor} className="projectImg" alt="ecom" />/

      </a.div>

      <a.div style={textStyle} className="projects">
        <img src={ecom} className="projectImg" alt="ecom" />/
        <div className="projectsTextRight">
          <h3
            className="bold"
            style={{
              fontSize: "2.5em",
              margin: "0px",
              position: "relative",
              right: "5vw",
            }}
          >
            Sullivan Ministries
          </h3>
          <div className="projectsBox">
            <p className="text abText projectInfo">
              (--in progress--) A funcitonal and secure dynamic Ecommerce shop, designed and created
              alongside freelance client.
            </p>
            <p className="bold projectInfo" style={{ textAlign: "left" }}>
              React -- Next.js -- Snipcart API -- Spring JS
            </p>
          </div>
          <div className="linkImgs">
          <a href="https://github.com/JoshuaGutie/sullivanMinistries" rel="noreferrer" target="_blank">
            <img alt="Git" src={Vector} />
          </a>
          <a href="https://sullivan-ministries.vercel.app/" rel="noreferrer" target="_blank">
            <img alt="Git" src={web} style={{width:"50px", height:"50px"}} />
          </a>
          </div>
        </div>
      </a.div>
    </div>
  );
}
