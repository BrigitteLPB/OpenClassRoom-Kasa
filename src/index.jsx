import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from 'pages/home/'
import PageNotFound from 'pages/page_not_found/'
import About from 'pages/about/index';
import Accomodation from 'pages/accomodation/index';

import 'style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/accueil" element={<Home/>}/>
                <Route path="/a-propos" element={<About/>}/>
                <Route path="/fiche-logement/:accomodation_id" element={<Accomodation/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
)
