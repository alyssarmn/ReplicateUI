import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Gallery from "./Gallery";
import Footer from "./Footer";
import PageNumber from "./PageNumber";
// import Gallery from "./Gallery";
// import Sns from "./Sns";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <div className="main-content">
        <Gallery />
        {/* <PageNumber /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
