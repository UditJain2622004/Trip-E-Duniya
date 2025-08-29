// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import CreateTrip from "./create-trip/index.jsx";
// import Header from "./components/ui/custom/Header.jsx";
// import { Toaster } from "sonner";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import Viewtrip from "./view-trip/[tripId]/index.jsx";
// import MyTrips from "./my-trips/index.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Header />
//         <App />
//       </>
//     ),
//   },
//   {
//     path: "/create-trip",
//     element: (
//       <>
//         <Header />
//         <CreateTrip />
//       </>
//     ),
//   },
//   {
//     path: "/view-trip/:tripId",
//     element: (
//       <>
//         <Header />
//         <Viewtrip />
//       </>
//     ),
//   },
//   {
//     path: "/my-trips",
//     element: (
//       <>
//         <Header />
//         <MyTrips />
//       </>
//     ),
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}>
//       <Toaster />
//       <RouterProvider router={router} />
//     </GoogleOAuthProvider>
//   </React.StrictMode>
// );

import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateTrip from "./create-trip/index.jsx";
import Header from "./components/ui/custom/Header.jsx";
import { Toaster } from "sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Viewtrip from "./view-trip/[tripId]/index.jsx";
import MyTrips from "./my-trips/index.jsx";

// Utility function to load Google Maps script once
const loadGoogleMapsScript = () => {
  return new Promise((resolve, reject) => {
    if (
      document.querySelector(`script[src*="maps.googleapis.com/maps/api/js"]`)
    ) {
      resolve(); // already loaded
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      import.meta.env.VITE_GOOGLE_MAPS_KEY
    }&libraries=places`;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

// Wrapper to ensure Google Maps is loaded before app mounts
function Root() {
  useEffect(() => {
    loadGoogleMapsScript().catch((err) =>
      console.error("Failed to load Google Maps:", err)
    );
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <App />
        </>
      ),
    },
    {
      path: "/create-trip",
      element: (
        <>
          <Header />
          <CreateTrip />
        </>
      ),
    },
    {
      path: "/view-trip/:tripId",
      element: (
        <>
          <Header />
          <Viewtrip />
        </>
      ),
    },
    {
      path: "/my-trips",
      element: (
        <>
          <Header />
          <MyTrips />
        </>
      ),
    },
  ]);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}>
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
