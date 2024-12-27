import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Note from "./Note";
import "../styles.css";

function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
