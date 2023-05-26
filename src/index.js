import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import {
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   Outlet,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//       path="/"
//       element={
//         <>
//           <h1>home</h1>
//           <Outlet></Outlet>
//         </>
//       }
//     >
//       <Route path="user" element={<h1>user</h1>} />
//       <Route path="admin" element={<h1>admin</h1>} />
//     </Route>
//   )
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}> */}
    <App />
    {/* </RouterProvider> */}
  </React.StrictMode>
);

reportWebVitals();
