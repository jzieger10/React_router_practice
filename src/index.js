import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import data from "./data";
import Home from "./components/Home";
import "./styles.css";

class App extends React.Component {
	// add constructor and CDM
	constructor() {
		super();
		this.state = {
			items: [],
		};
	}

	componentDidMount() {
		this.setState({ items: data });
	}

	render() {
		return (
			<div className="App">
				<nav>
					<h1 className="store-header">Dustin's Trinkets</h1>
					<div className="nav-links" />
				</nav>

				<Route path="/" component={Home} />
			</div>
		);
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	rootElement
);
