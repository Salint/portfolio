import React from "react";

import "../assets/style/header.css"

import GlitchVideo from "../assets/videos/glitch.mp4"

const Header = () => (
	<header>
		<video autoPlay muted loop>
			<source src={GlitchVideo} type="video/mp4"></source>
		</video>
		<div id="text">
			<h1>Hello, I'm Salint.</h1>
			<p>I'm a 16-year-old Egyptian programmer.</p>
		</div>
	</header>
);

export default Header;