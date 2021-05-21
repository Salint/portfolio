import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../assets/style/navbar.css"

import Logo from "../assets/images/logo.png";

const Navbar = () => {

	const [ navigationOpened, toggleNavigation ] = useState(false);

	return (
		<>
			<nav>
				<div id="logo">
					<button onClick={() => toggleNavigation(!navigationOpened)}><FontAwesomeIcon icon={faBars} /></button>
					<img src={Logo} alt="Logo" />
				</div>
				<ul className={navigationOpened ? "opened" : ""}>
					<li>About</li>
					<li>Skills</li>
					<li>Reviews</li>
					<li>Contact</li>
				</ul>
				<div id="buttons">
					<a href="https://github.com/Salint"><FontAwesomeIcon icon={faGithub} /></a>
					<a href="https://twitter.com/SalintOfficial"><FontAwesomeIcon icon={faTwitter} /></a>
					<a href="https://www.youtube.com/channel/UCPeiRZ5N3BCwo7xDNZyVqhQ"><FontAwesomeIcon icon={faYoutube} /></a>
				</div>
			</nav>
		</>
	)

};

export default Navbar;