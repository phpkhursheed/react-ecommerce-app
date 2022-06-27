import React from "react";
import Category from "../../atoms/Category";

import Main from "../../pattern/Main";

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
