import "./hero.css";
// import Heroimg from "./hero_img.svg";
import Button from "./button";
import Heroimg from "./hero_img.js";

function Hero() {
  return (
    <div className="hero">
      <div class="hero-content">
        <h1 class="hero-title">travel agency</h1>
        <h2 class="hero-subtitle">
          We help you find the perfect place to travel{" "}
        </h2>
        <h3 class="hero-subtitle2">
          Gotrip is a travel agency that offers you ready plans or help you plan
          your own to the best places around the world.
        </h3>
        <Button value="Plan your trip" />
        <Button value="Pick a trip" />
      </div>
      {/* <div className="Heroimg"> */}
        <Heroimg />
      {/* </div> */}
      {/* <img src={Heroimg} className="Heroimg" alt="Heroimg" /> */}
    </div>
  );
}

export default Hero;
