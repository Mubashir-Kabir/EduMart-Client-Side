import React from "react";
import GetUpdate from "../components/GetUpdate";
import HomepageHeader from "../components/HomepageHeader";
import State from "../components/State";

const Home = () => {
  return (
    <div>
      <HomepageHeader></HomepageHeader>
      <GetUpdate></GetUpdate>
      <State></State>
    </div>
  );
};

export default Home;
