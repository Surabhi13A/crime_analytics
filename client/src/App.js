import React from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Component
import Header from "./component/Header";

// import Pages
import Home from "./Pages/Home";
import PredictionPage from "./Pages/PredictionPage";
import MappingPage from "./Pages/MappingPage";

function App() {
	return (
		<React.StrictMode>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/prediction" component={PredictionPage} />
					<Route exact path="/mapping" component={MappingPage} />
				</Switch>
			</Router>
		</React.StrictMode>
	);
}

export default App;
