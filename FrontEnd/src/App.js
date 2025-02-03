import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllRoute from "./Route/Allroute";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import Loader from "./Container/Loading/Loader";
import Login from "./Container/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./Container/Register/Register";

function App() {
  const [loader, setLoader] = useState(true);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  if (loader) {
    return <Loader />;
  }
  console.log('object :>> ',);

  return (
    <>
      {/* <Maintenance />*/}
      {
        (userId && token) ? <AllRoute /> :
          <>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>

          </>
      }
    </>
  );
}

export default App;
