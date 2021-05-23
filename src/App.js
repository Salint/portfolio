import React from "react";

import "./assets/style/master.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Reviews from "./components/Reviews";

const App = () => (
	<>
		<Navbar />
		<Header />
		<About />
		<Skills />
		<Reviews />
	</>
);

export default App;