import { useEffect, useRef, useState } from "react";
import { animated as a, useSpring, useTrail } from "react-spring";
import "./css/about.css";
import gitPhoto from "./img/gitPhoto.png";

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

export default function About() {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  });
  const textStyle = useSpring({
    config: { duration: 300, friction: 100 },
    from: { opacity: 0, y: -50 },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      y: dataRef?.isIntersecting ? 0 : -50,
    },
  });


  const moreStyle = useSpring({
    config: { duration: 300 },
    delay: 800,
    from: { opacity: 0, y: -50 },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      y: dataRef?.isIntersecting ? 0 : -50,
    },
  });

  const listStyle = useSpring({
    config: { duration: 300 },
    delay: 1500,
    from: { opacity: 0, y: 50 },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      y: dataRef?.isIntersecting ? 0 : 50,
    },
  });

  console.log(dataRef);

  return (
    <div className="aboutContainer" id="about">
      {/* div is used as a prop to freeze intersection observer */}
      <div ref={triggerRef} />
      <div className="about">
        
        <div className="aboutInfo">
        <div className="aboutTitle">
          <a.h2 style={textStyle} className="h2style text abText">
            About me
          </a.h2>
        </div>
          <a.p style={moreStyle} className="text abText">
            Hello, my name is Josh and I have a passion for designing and
            creating projects to display on the internet. In 2019 at the age of
            18, I discovered how to use the inspect element tool -- to say it
            was life changing would be an understatement. I knew I had found my
            passion that day.{" "}
          </a.p>
          <a.p style={moreStyle} className="text abText">
            Over the past 3 years I have collaborated with multiple junior
            developers, <a className="bold underlined" href="https://github.com/JoshuaGutie/411_wk6_day1_redux_thunk" target="_blank" rel="noreferrer">worked with Redux, </a><a className="bold underlined" href="https://github.com/JoshuaGutie/311_wk3_day1_db_select" target="_blank" rel="noreferrer">Used SQL on Databases,</a> <a className="bold underlined" href="https://github.com/JoshuaGutie/NewsFeed" target="_blank" rel="noreferrer">completed a
            hackathon,</a> worked alongside freelance clients,in addition to <a href="https://github.com/JoshuaGutie" className="bold underlined" target="_blank" rel="noreferrer"> cloning and
            creating 38 GitHub repositories.</a>
          </a.p>
          <a.p style={moreStyle} className="text abText">
            I have the most expieience in
          </a.p>
        <a.ul style={listStyle} className="list">
          <li className="text abText">Javascript(ES6+)</li>
          <li className="text abText">React</li>
          <li className="text abText">HTML</li>
          <li className="text abText">CSS</li>
          <li className="text abText">Node.js</li>
          <li className="text abText">SQL</li>
        </a.ul>
        </div>
        <div className="gitImg"><a.img style={moreStyle} src={gitPhoto} alt="git"  /></div>
      </div>
    </div>
  );
}
