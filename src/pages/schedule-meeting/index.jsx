import React from "react";
import Navbar from "components/Navbar/navbar";
import DarkTheme from "layouts/Dark";
import { InlineWidget } from "react-calendly";
import PagesHeader from "components/Pages-header";
import LoadingScreen from "components/Loading-Screen";

const ScheduleMeeting = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <header className="pages-header circle-bg valign">
        <div className="container">
          <h3 className="color-font fw-700" style={{ textAlign: "center" }}>
            Let's Talk Business
          </h3>
          <InlineWidget
            styles={{ height: 1000, margin: 0 }}
            url="https://calendly.com/rhettjwilliams/meeting"
          />
        </div>
        <div className="half sub-bg">
          <div className="circle-color">
            <div className="gradient-circle"></div>
            <div className="gradient-circle two"></div>
          </div>
        </div>
      </header>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Baxter Hill - Schedule Meeting</title>
    </>
  );
};

export default ScheduleMeeting;
