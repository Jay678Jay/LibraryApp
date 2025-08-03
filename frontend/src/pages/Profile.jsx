 import React from "react";
import logo from "../assets/PixelLogo.png";

export default function Profile() {
  return (
    <div style={{ maxWidth: "1000px", margin: "50px auto", padding: "20px" }}>
      {/* Logo and Header */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <img src={logo} alt="PixelForge Logo" style={{ width: "100px", marginBottom: "10px" }} />
        <h2 style={{ fontSize: "30px", marginBottom: "5px" }}>Dashboard Page</h2>
      </div>

      {/* Welcome Banner */}
      <div style={{
        border: "1px solid #ccc",
        padding: "20px",
        marginBottom: "20px",
        textAlign: "center",
        borderRadius: "8px"
      }}>
        <h3>Welcome back, User!</h3>
      </div>

      {/* Stats Boxes */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", marginBottom: "20px" }}>
        <div style={{
          flex: 1,
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center"
        }}>
          <h4>Books Borrowed</h4>
          <p>12</p>
        </div>
        <div style={{
          flex: 1,
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center"
        }}>
          <h4>Books Returned</h4>
          <p>9</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px"
      }}>
        <h4 style={{ textAlign: "center", marginBottom: "10px" }}>Recent Activity</h4>
        <ul>
          <li>Returned "Pride and Prejudice"</li>
          <li>Borrowed "The Great Gatsby"</li>
          <li>Returned "The Giver"</li>
        </ul>
      </div>
    </div>
  );
}
