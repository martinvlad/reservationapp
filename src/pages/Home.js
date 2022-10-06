import React from "react";
import "./Home.css";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Featured from "../components/Featured";
import PropertyList from "../components/PropertyList";
import GuestProperties from "../components/GuestProperties";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <GuestProperties />
      </div>
    </div>
  );
}
