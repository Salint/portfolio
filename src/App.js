import React from "react";

import "./assets/style/master.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";

const App = () => (
	<>
		<Navbar />
		<Header />
		<About />
	</>
);

export default App;