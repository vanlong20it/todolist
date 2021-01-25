import React, { useEffect } from "react";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import MainPage from "./components/MainPage";
import "./App.scss";
const App = () => {
    useEffect(() => {
        document.title = "Todolist - LongNguyen";
    });
    return (
        <div className="app">
            <Header />
            <MainPage />
            <Footer />
        </div>
    );
};

export default App;
