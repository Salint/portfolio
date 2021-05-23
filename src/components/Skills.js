import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../assets/style/skills.css"
import { faCss3Alt, faGitAlt, faHtml5, faJava, faJsSquare, faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {

	return (
		<section id="skills">
			<div id="container">
				<div className="skill">
					<h1><FontAwesomeIcon icon={faHtml5} /></h1>
					<label>HTML5</label>
					<div className="outer-bar">
						<div className="inner-bar" style={{ width: "83%" }}></div>
					</div>
					<p>83%</p>
				</div>
				<div className="skill">
					<h1><FontAwesomeIcon icon={faCss3Alt} /></h1>
					<label>CSS3</label>
					<div className="outer-bar">
						<div className="inner-bar" style={{ width: "88%" }}></div>
					</div>
					<p>88%</p>
				</div>
				<div className="skill">
					<h1><FontAwesomeIcon icon={faJsSquare} /></h1>
					<label>JavaScript</label>
					<div className="outer-bar">
						<div className="inner-bar" style={{ width: "96%" }}></div>
					</div>
					<p>96%</p>
				</div>
				<div className="skill">
					<h1><FontAwesomeIcon icon={faReact} /></h1>
					<label>ReactJS</label>
					<div className="outer-bar">
						<div className="inner-bar" style={{ width: "97%" }}></div>
					</div>
					<p>97%</p>
				</div>
				<div className="skill">
					<h1><FontAwesomeIcon icon={faPhp} /></h1>
					<label>PHP</label>
					<div className="outer-bar">
						<div className="inner-bar" style={{ width: "78%" }}></div>
					</div>S
					<p>78%</p>
				</div>
				<div className="skill">
					<h1><FontAwesomeIcon icon={faJava} /></h1>
					<label>Java</label>
					<div className="outer-bar">
						<div className="inner-bar" style={{ width: "71%" }}></div>
					</div>
					<p>71%</p>
				</div>
				<div className="skill">
					<h1><FontAwesomeIcon icon={faPython} /></h1>
					<label>Python</label>
					<div className="outer-bar">
						<div className="inner-bar" style={{ width: "57%" }}></div>
					</div>
					<p>57%</p>
				</div>
				<div className="skill">
					<h1><FontAwesomeIcon icon={faGitAlt} /></h1>
					<label>Git</label>
					<div className="outer-bar">
						<div className="inner-bar" style={{ width: "71%" }}></div>
					</div>
					<p>71%</p>
				</div>
			</div>
		</section>
	);
};

export default Skills;