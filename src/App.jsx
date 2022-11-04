import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import Loading from "./layouts/Loading";
import Login from "./pages/Log in/Login";
import PrivetOutlet from "./PrivetRoute/PrivetOutlet";

const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const AboutUs = lazy(() => import("./pages/aboutPage/About"));
const HelpAndSupport = lazy(() =>
  import("./pages/helpAndSupportPage/HelpAndSupport")
);

const Home = lazy(() => import("./pages/Homepage/Home"));

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Route */}
            <Route
              path="/*"
              element={
                <PrivetOutlet>
                  <Route path="about/*" element={<AboutUs />} />
                  <Route path="helpAndSupport/*" element={<HelpAndSupport />} />
                  <Route path="home/*" element={<Home />} />
                </PrivetOutlet>
              }
            ></Route>
          </Routes>
        </Suspense>
      </AuthContextProvider>
    </>
  );
};

export default App;
