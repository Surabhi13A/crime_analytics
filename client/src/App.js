import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import MappingPage from "./pages/MappingPage";
import PredictionPage from "./pages/PredictionPage";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/prediction" element={<PredictionPage />} />
				<Route path="/mapping" element={<MappingPage />} />
			</Routes>
		</Router>
	);
}

export default App;
