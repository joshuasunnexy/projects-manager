import { Outlet } from "react-router-dom";
import Head, { Brand, Search, Notifications, User } from "./components/head";
import Side from "./components/side";
import "./app.css";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <>
      <Head>
        <Brand />
        <div className="searchNotifUser">
          <Search />
          <Notifications />
          <User />
        </div>
      </Head>
      <div className="content">
        <Side />
        <Outlet />
      </div>
    </>
  );
};

export default App;
