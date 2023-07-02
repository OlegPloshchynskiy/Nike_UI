import React, { useEffect, useState } from "react";

import Header from "../components/header/Header";
import MobileHeader from "../components/mobileHeader/MobileHeader";
import Footer from "../components/footer/Footer";
import Container from "../components/container/Container";
import ToTop from "../components/toTop/ToTop";
import Preloader from "./preloader/Preloader";

const Layout = ({ children }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 1270px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1270px)");

    const handleResize = (event) => {
      setIsLargeScreen(event.matches);
    };

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 1300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {isLargeScreen ? <Header /> : <MobileHeader />}
      <Container>
        {showPreloader ? <Preloader /> : <></>}
        {/* <ToTop /> */}
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;

// https://www.google.com/maps?q=49.785057,24.059494&q=50.2807271,25.9722057

// https://www.google.com/maps/dir/49.785057,24.059494/50.2807271,25.9722057
