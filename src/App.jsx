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
			<div className='spacer layer'></div>
			<About />
			<div className='spacer layer2'></div>
			<Tech />
			<div className='spacer layer'></div>
			<Experience />
			<div className='spacer layer2'></div>
			<Contact />
			<div className='spacer layer'></div>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
