 import React from "react";
import logo from "../assets/PixelLogo.png"; 

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "60px 20px" }}>
      <img
        src={logo}
        alt="PixelForge Logo"
        style={{ width: "180px", marginBottom: "30px" }}
      />
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Welcome to PixelForge Library</h1>
      <p style={{ fontSize: "1.2rem", color: "#666" }}>
        Explore, manage, and grow your digital book collection with ease.
      </p>
    </div>
  );
}
