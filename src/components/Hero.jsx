import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import { styles } from "../style";
// import { ComputersCanvas } from "./canvas";
import { heroImage } from "../assets/index";

const Hero = () => {
	useEffect(() => {
		<script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></script>;
	}, []);
	return (
		<section className='w-full h-screen mx-auto '>
			<div className='bgimg-1'>
				<div className='container row mt-5'>
					<div className='col-6 mt-5'>Hello</div>
					<div className='col-6'>
						{/* <img src={heroImage} alt='heroImage' className='w-full' /> */}

						<lottie-player
							src='../assets/lottieFiles/01-animation1.gif.json'
							background='#ffffff'
							className='mt-5 w-12'
							speed='1'
							// style='width: 300px; height: 300px;'
							hover
							loop
							controls
							autoplay></lottie-player>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
