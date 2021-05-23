import React from "react";

import "./assets/style/master.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => (
	<>
		<Navbar />
		<Header />
		<About />
		<Skills />
	</>
);

export default App;