import { useState } from "react";
import ListNavBar from "./assets/components/NavBar/ListNavBar";
import NavBar from "./assets/components/NavBar/NavBar";
import TitleNavBar from "./assets/components/NavBar/TitleNavBar";
import FirstHome from "./assets/components/NavBar/FirstHome";
import Header from "./assets/components/NavBar/Header";
import ContainerContentOne from "./assets/components/Contents/ContainerContentOne";
import ContainerContentTwo from "./assets/components/Contents/ContainerContentTwo";
import ContentThree from "./assets/components/Contents/ContentThree";
import ContentFour from "./assets/components/Contents/ContentFour";
import JoinTeam from "./assets/components/Contents/JoinTeam";
import ContactUs from "./assets/components/Contents/ContactUs";
import Footer from "./assets/components/Contents/Footer";

export default function App() {
  const [toggleMenu, setToggleMenu] = useState(true);

  function handleToggleMenu(toggleMenu) {
    setToggleMenu(!toggleMenu);
  }

  return (
    <div className="bg-amber-50">
      <FirstHome>
        <NavBar>
          <TitleNavBar
            onToggleMenu={() => handleToggleMenu(toggleMenu)}
            toggleMenu={toggleMenu}
          />
          <ListNavBar toggleMenu={toggleMenu} />
        </NavBar>
        <Header />
      </FirstHome>
      <ContainerContentOne />
      <ContainerContentTwo />
      <ContentThree />
      <ContentFour />
      <JoinTeam />
      <ContactUs />
      <Footer />
    </div>
  );
}
