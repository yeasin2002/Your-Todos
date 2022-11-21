import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

// outlets
import PrivetOutlet from './PrivetRoute/PrivetOutlet';
import PublicOutlet from './PrivetRoute/PublicOutlet';

//  pages components
const Home = lazy(() => import('./pages/Homepage/Home'));
const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const AboutUs = lazy(() => import('./pages/aboutPage/About'));
const Loading = lazy(() => import('./layouts/Loading'));
const Login = lazy(() => import('./pages/Log in/Login'));
const SignIn = lazy(() => import('./pages/Singin/SignIn'));
const HelpAndSupport = lazy(() =>
  import('./pages/helpAndSupportPage/HelpAndSupport')
);

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* public outlet  */}

            <Route path="/" element={<PublicOutlet />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign_in" element={<SignIn />} />
            </Route>

            {/* Protected Route */}
            <Route path="/*" element={<PrivetOutlet />}>
              <Route path="about" element={<AboutUs />} />
              <Route path="helpAndSupport" element={<HelpAndSupport />} />
              <Route path="home/*" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthContextProvider>
    </>
  );
};

export default App;
