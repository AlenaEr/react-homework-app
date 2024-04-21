import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Form from "./components/Form";
import UseFetch from "./components/UseFetch";
import { UserNameProvider } from "./contexts/UserNameProvider";
import "./css/index.css";
import "./css/login.css";
import "./css/menu.css";

const Menu = lazy(() => import("./components/Menu"));
const App = () => {
  return (
    <UserNameProvider>
      <Router>
        <div className="wrapper">
          <Header />
          <main className="content">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/login" element={<h1>Login Page</h1>} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/usefetch" element={<UseFetch />} />
                <Route
                  path="/"
                  element={
                    <>
                      <h1 className="title">
                        The best pizza.
                        <br />
                        <span className="text-yellow">
                          Straight out of the oven, straight to you.
                        </span>
                      </h1>
                      <p className="sub-title">
                        👋 Welcome! Please start by telling us your name:
                      </p>
                      <Form />
                    </>
                  }
                />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </UserNameProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
