import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import {
	Navbar,
	Hero,
	About,
	Contact,
	Feedbacks,
	Experience,
	Works,
	Tech,
	StarsCanvas,
	Footer,
} from "./components";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { moonImage, landingImage, underGroundImage } from "./assets/index";
import "./App.css";

const App = () => {
	// const ref = useRef();
	return (
		<BrowserRouter>
			<Navbar />
			<Hero />
				<div className='innerBgDiv1'></div>
			<About />
				<div className='innerBgDiv2'></div>
			<Tech />
			<div className='bg-Img_2_5'>
				<div className='innerBgDiv3'></div>
			</div>

			<Experience />

			<div className='bg-Img_2_5'>
				<div className='innerBgDiv3'>
					<p></p>
				</div>
			</div>

			<Contact />
			<Footer />
		</BrowserRouter>
	);
};

export default App;
