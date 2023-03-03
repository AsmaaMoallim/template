import logo from './LOGO.svg';
import "./navbar.css";
import Button from "./button.js";

function Navbar() {
  return (
    <div>
      <nav className="Navbar">
        <img src={logo} className="logo" alt="logo" />
        <ul>
          <li>
            <Button value="Sign Up" />
          </li>
          <li>
            <a href="ContactUs.asp">Contact Us</a>
          </li>
          <li>
            <a href="WhoWeAre.asp">Who we are</a>
          </li>
          <li>
            <a href="Trips.asp">Trips</a>
          </li>
          <li>
            <a href="Plans.asp">Plans</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
