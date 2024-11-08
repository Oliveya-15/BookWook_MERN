import React from 'react'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import GenreMenu from "./components/GenresMenu";
import Freebook from "./components/Freebook";


const Home = () => {
  return (
    <>
    <div>
      <Navbar />
      <Banner />
      <GenreMenu />
      <Freebook />
      <Footer />
    </div>
    </>
  )
}

export default Home