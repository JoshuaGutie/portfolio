import { useEffect, useRef, useState } from "react";
import { animated as a, useSpring } from "react-spring";
import "./css/home.css";

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

function AnimatedLogo() {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  });
  const { x } = useSpring({
    from: { x: 0 },
    to: {
      x: dataRef?.isIntersecting ? 1 : 0,
    },
    delay: 500,
    config: { friction: 100 },
    damping: 1,
  });

  console.log(dataRef, "logo");

  return (<div  ref={triggerRef}>
    <a.svg
      style={{ margin: "auto", width: 300, height: 300 }}
      viewBox="0 0 170 281"
      fill="none"
      strokeWidth="2"
      stroke="#D6AA32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={1000}
      strokeDashoffset={x.to((x) => (1 - x) * 1000)}
    >
      <path d="M169.6 0.599976V184.6C169.6 196.067 168.067 207.533 165 219C162.067 230.333 157 240.667 149.8 250C142.733 259.2 133.133 266.6 121 272.2C108.867 277.8 93.7333 280.6 75.6 280.6C62.1333 280.6 48.8667 278.467 35.8 274.2C22.8667 269.933 10.9333 263.733 0 255.6L15.4 232.6C27.4 240.067 38.3333 245.133 48.2 247.8C58.0667 250.333 67.0667 251.6 75.2 251.6C94.4 251.6 109.133 245.467 119.4 233.2C129.8 220.933 135 204.067 135 182.6V29H53.4V0.599976H169.6Z" />
    </a.svg>
    </div>
  );
}

export default AnimatedLogo;
