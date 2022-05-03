import './index.scss';
import React from "react";
import {BrowserRouter, Link, Route} from 'react-router-dom';
import ImagesPage from "./pages/ImagesPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path="/" component={ImagesPage}></Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
