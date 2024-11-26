import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import GenresMenu from "../components/GenresMenu";
import Freebook from "../components/Freebook";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <GenresMenu />
      <Freebook />
    </>
  );
}

export default Home;
