import React, { Suspense } from "react";
import Header from "./components/Common/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Common/Footer";
import "./App.scss";
import Loader from "./components/Common/Loader";
const App = () => {
    return (
        <Suspense fallback={<Loader />}>
            <div className="app">
                <Header />
                <MainPage />
                <Footer />
            </div>
        </Suspense>
    );
};

export default App;
