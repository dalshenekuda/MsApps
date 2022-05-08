import './index.scss';
import React from "react";
import {BrowserRouter, Link, Route} from 'react-router-dom';
import ImagesPage from "./pages/ImagesPage";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="app">
            <div className="container">
                <BrowserRouter>
                    <Header/>
                    {/*if we need to add new routes we can do it here*/}
                    <Route path="/" component={ImagesPage}></Route>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
