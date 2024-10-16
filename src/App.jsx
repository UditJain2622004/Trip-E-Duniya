import React from "react";
import { useState } from "react";
import "./App.css";
import Hero from "./components/ui/custom/Hero";

// Import named Firebase services (app, analytics, db)
import { app, analytics, db } from "./service/firebaseConfig";

function App() {
  // You can use Firebase services (e.g., db) inside components as needed
  
  return (
    <>
      {/* Hero Component */}
      <Hero />
    </>
  );
}

export default App;
