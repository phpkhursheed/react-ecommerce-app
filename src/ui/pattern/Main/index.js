import React from "react";
import Header from "../../atoms/Header";
import Navigation from "../../atoms/Navigation";
import Footer from "../../atoms/Footer";
import NotificationContainer from "react-notifications/lib/NotificationContainer";

function Main(props) {
  return (
    <>
      <Header />
      <Navigation />
      {props.children}
      <Footer />
      <NotificationContainer />
    </>
  );
}

export default Main;
