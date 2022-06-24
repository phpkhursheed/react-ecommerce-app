import React from "react";
import Header from "../../atoms/Header";
import ProductList from "../../atoms/ProductList";
import Navigation from "../../atoms/Navigation";
import Category from "../../atoms/Category";
import Footer from "../../atoms/Footer";
import Main from "../../pattern/Main";

import { NotificationContainer } from "react-notifications";

import "react-notifications/lib/notifications.css";

function Home() {
  return (
    <>
      <Main>
        <Category />
      </Main>
    </>
  );
}

export default Home;
