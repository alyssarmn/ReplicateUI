import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Gallery from "./Gallery";
import Footer from "./Footer";
import PageNumber from "./PageNumber";
import ProductList from "./ProductList";
// import Gallery from "./Gallery";
// import Sns from "./Sns";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <div className="main-content">
        <Gallery />
        {/* <ProductList /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
