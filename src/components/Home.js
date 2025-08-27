import React from "react";

function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(/images/bakery.jpg)", // ✅ from public folder
        backgroundSize: "cover",       // makes it cover the whole div
        backgroundPosition: "center",  // centers the image
        minHeight: "100vh",            // full screen height
        color: "white",                // text color so it’s visible
      }}
      className="d-flex align-items-center text-center"
    >
      <div className="container">
        <h1 className="fw-bold display-3">Welcome to Sweet Bakery 🍰</h1>
        <p className="lead">Freshly baked cakes, pastries, and breads every day!</p>
        <button className="btn btn-lg btn-warning fw-bold shadow">Order Now</button>
      </div>
    </div>
  );
}

export default Home;
