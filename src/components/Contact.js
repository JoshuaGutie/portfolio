import "./css/about.css";

function Contact() {
  return (
    <div className="superContainer">
    <div className="contactContainer">
      <h3
        className="bold"
        style={{
          fontSize: "2.5em",
        }}
      >
        Thanks For Viewing!
      </h3>
      <span className="text">Get in touch</span>
      <div style={{ marginTop: "20px" }}>
        {" "}
        <span className="text abText">Email: </span>
        <a href="mailto:josh.gvtie@gmail.com"  target="_blank" rel="noreferrer" className="text abText">
          josh.gvtie@gmail.com
        </a>
      </div>
      <div style={{ marginTop: "20px" }}>
        {" "}
        <span className="text abText">On the Web:</span>
        <a
          href="https://www.linkedin.com/in/joshua-gutierrez-588b1018a/"
          className="text abText"
        >
          Linkin
        </a>
        <b className="bold"> / </b>
        <a
          href="https://medium.com/@josh.gvtie"
          target="_blank" rel="noreferrer"
          className="text abText"
        >
          Medium
        </a>
        <b className="bold"> / </b>
        <a
          href="https://github.com/JoshuaGutie"
          target="_blank" rel="noreferrer"
          className="text abText"
        >
          GitHub
        </a>
      </div>
    </div>
    </div>
  );
}

export default Contact;
