import React from "react";
import GetUpdate from "../components/GetUpdate";
import HomepageHeader from "../components/HomepageHeader";
import State from "../components/State";

const Home = () => {
  return (
    <div>
      {/* landing page header */}
      <HomepageHeader></HomepageHeader>

      {/* get update hero component */}
      <GetUpdate></GetUpdate>

      {/* static state component for students,teachers,course and subscribe count */}
      <State></State>
    </div>
  );
};

export default Home;
