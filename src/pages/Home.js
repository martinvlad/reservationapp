import React from "react";
import "./Home.css";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Featured from "../components/Featured";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
      </div>
    </div>
  );
}
