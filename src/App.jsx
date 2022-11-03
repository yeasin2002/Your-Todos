import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import Loading from "./layouts/Loading";
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Suspense>
      </AuthContextProvider>
    </>
  );
};

export default App;
