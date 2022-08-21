import { useEffect, useRef, useState } from "react";
import { animated as a, useSpring } from "react-spring";
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
    config: { duration: 800, friction: 1000 },
    from: { opacity: 0, y: -50 },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      y: dataRef?.isIntersecting ? 0 : -50,
    },
  });

  const moreStyle = useSpring({
    config: { duration: 1000 },
    delay: 800,
    from: { opacity: 0, y: -50 },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      y: dataRef?.isIntersecting ? 0 : -50,
    },
  });

  console.log(dataRef);

  return (
    <div className="aboutContainer">
      {/* div is used as a prop to freeze intersection observer */}
      <div ref={triggerRef} />
      <div className="about">
        <div className="aboutTitle">
          <a.h2 style={textStyle} className="h2style text abText">
            About me
          </a.h2>
        </div>
        <div className="aboutInfo">
          <a.p style={moreStyle} className="text abText">
            Hello, my name is Josh and I have a passion for designing and
            creating projects to display on the internet. In 2019 at the age of
            18, I discovered how to use the inspect element tool -- to say it
            was life changing would be an understatement. I knew I had found my
            passion that day.{" "}
          </a.p>
          <a.p style={moreStyle} className="text abText">
            Over the past 3 years I have collaborated with multiple junior
            developers, contributed to an open source project, completed a
            hackathon, worked alongside clients,in addition to cloning and
            creating 38 GitHub repositories.
          </a.p>
          <a.p style={moreStyle} className="text abText">
            I have the most expieience in
          </a.p>
          {/*INSERT LIST HERE TO USE TRANSITION SPRINGJS */}
        </div>
      </div>
      <a.img className="gitImg" style={moreStyle} src={gitPhoto} alt="git" />
    </div>
  );
}
