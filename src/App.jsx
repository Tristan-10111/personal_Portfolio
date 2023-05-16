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

			<div className='parralaxDemoDiv'>
				<h3 className=' h3_1 '>About me </h3>
				<p>
					
				</p>
			</div>

			<div className='bgimg-2'>
				<div className='caption'>
					<span className='border'>Tech</span>
				</div>
			</div>

			<div className='bg-Img_2_5'>
				<div className='innerBgDiv2_5'>
					<p>
						Scroll up and down to really get the feeling of how Parallax
						Scrolling works.
					</p>
				</div>
			</div>

			<div className='bgimg-3'>
				<div className='caption'>
					<span className='border'>SCROLL UP</span>
				</div>
			</div>

			<div className='bg-Img_2_5'>
				<div className='innerBgDiv2_5_2'>
					<p>
						Scroll up and down to really get the feeling of how Parallax
						Scrolling works.
					</p>
				</div>
			</div>

			<div className='bgimg-1'>
				<div className='caption'>
					<span className='border'>Contact</span>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
