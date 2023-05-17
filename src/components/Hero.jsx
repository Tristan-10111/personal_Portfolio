import React, { useEffect } from "react";
// import { motion } from "framer-motion";
import { styles } from "../style";
// import { ComputersCanvas } from "./canvas";
import { heroImage } from "../assets/index";
import heroPageAnimation from "../assets/lottieFiles/heroPage.json";
// import heroPageAnimation2 from "../assets/lottieFiles/icon-4.json";
import Lottie from "lottie-react";
const Hero = () => {
	return (
		<section className={" w-full h-screen bg-heroBg "}>
			<div className='flex my-24 items-center'>
				<div className=' text-base text-white w-1/2 my-32 mx-9'>
					<p>Hi there</p>
					<h3 className='my-6'>I am tristan</h3>
					<p className='my-6'>Front end developer</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
					<div className='my-24'>
						<button className='bg-white text-black'>contact me</button>
						<button className='bg-white text-black mx-2'>My Cv</button>
					</div>
				</div>
				<div className=' w-1/2'>
					<Lottie
						animationData={heroPageAnimation}
						loop={true}
						// className='w-1/2'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
