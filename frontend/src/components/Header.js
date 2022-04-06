import logo from "../assets/logo.svg";
import sunIcon from "../assets/icon-sun.svg";
import moonIcon from "../assets/icon-moon.svg";
import avatar from "../assets/image-avatar.jpg";
import "./Header.css";

const Header = ({ theme, toggleDarkmode }) => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <img src={logo} alt="Invoice app logo" className="logo" />
      </div>
      <button onClick={toggleDarkmode}>
        <img src={theme === "light-mode" ? moonIcon : sunIcon} alt="" />
      </button>
      <div className="avatar-wrapper">
        <img src={avatar} alt="" className="avatar" />
      </div>
    </header>
  );
};

export default Header;
