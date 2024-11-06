import logo from "../../img/logo.png";
import menuBar from "../../svg/menu-bar.svg";

export default function TitleNavBar({ onToggleMenu }) {
  return (
    <div className="flex flex-row items-center justify-between px-3">
      <div>
        <a href="/">
          <img className="w-40" src={logo} alt="logo-website" />
        </a>
      </div>
      <div className="md:hidden">
        <button onClick={onToggleMenu}>
          <img className="toggleMenuBar" src={menuBar} alt="menu bar svg" />
        </button>
      </div>
    </div>
  );
}
