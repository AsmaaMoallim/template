import "./loadingPage.css";
// import logo from "./logo.svg";

function LoadingPage() {
  return (
    <div className="loadingPage">
      <div className="load_logo">
        <svg
          width="177"
          height="104"
          viewBox="0 0 177 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            id="yellow_rect"
            width="83.2365"
            height="20.8092"
            transform="translate(0 59.3573) rotate(-45)"
            fill="#FFBDA7"
          />
          <rect
            id="blue_rect"
            width="104.046"
            height="20.8092"
            transform="translate(37.155 74.0715) rotate(-45)"
            fill="#5EABE3"
          />
          <rect
            id="purble_rect"
            width="124.855"
            height="20.8092"
            transform="translate(73.4187 88.7856) rotate(-45)"
            fill="#BA68C8"
          />
        </svg>
      </div>
      Loading<span id="loading_text">...</span>
      {/* <img src={logo} className="Heroimg" alt="Heroimg" /> Loading... */}
    </div>
  );
}

export default LoadingPage;
