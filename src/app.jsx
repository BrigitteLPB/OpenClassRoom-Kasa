import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from 'pages/home/'
import PageNotFound from 'pages/page_not_found/'
import About from 'pages/about/index';
import Accomodation from 'pages/accomodation/index';

import 'style/index.scss';
import Header from 'components/common/header';
import Footer from 'components/common/footer';

function App(){
	return (
		<>
			<Header/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/a-propos" element={<About/>}/>
				<Route path="/fiche-logement/:accomodation_id" element={<Accomodation/>}/>
				<Route path="*" element={<PageNotFound/>}/>
			</Routes>
			<Footer/>
		</>
	)
}

export default App;
