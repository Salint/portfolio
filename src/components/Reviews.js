import React from "react";

import "../assets/style/reviews.css"

const Reviews = () => (
	<section id="reviews">
		<h1>Reviews</h1>
		<h2>Communities/Organizations</h2>
		<div className="section">
			<div className="review">
				<div className="info">
					<label>Davis Empire Inc.</label>
					<br />
					<a href="https://davisempireinc.com/">https://davisempireinc.com/</a>
				</div>
				<div className="content">
					<p>Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder</p>
				</div>
			</div>
			<div className="review">
				<div className="info">
					<label>Vanilla Remastered</label>
					<br />
					<a href="https://vanilla-remastered.com/">https://vanilla-remastered.com/</a>
				</div>
				<div className="content">
					<p>Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder</p>
				</div>
			</div>
		</div>
		<br />
		<h2>Individuals</h2>
		<div className="section">
			<div className="review">
				<div className="info">
					<label>Trapez</label>
				</div>
				<div className="content">
					<p>Really cool guy, made me a website to showcase my Blender 3D Art, the site looked great, color choice was nice too and the website had everything I needed, made it in less than a day, my N1 go to whenever I have questions related to coding etc.</p>
				</div>
			</div>
			<div className="review">
				<div className="info">
					<label>Mayo</label>
				</div>
				<div className="content">
					<p>Cringe sometimes, but cool teen most of the time. <b>Desperate to get a girlfriend.</b> Great developer, helped me learn few coding and rules stuff. He can do anything, literally anything, first person to ask a question to: Salint.</p>
				</div>
			</div>
		</div>
	</section>
);

export default Reviews;