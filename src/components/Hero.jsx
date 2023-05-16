import React, { useEffect } from "react";
// import { motion } from "framer-motion";
import { styles } from "../style";
// import { ComputersCanvas } from "./canvas";
import { heroImage } from "../assets/index";
import heroPageAnimation from "../assets/lottieFiles/heroPage.json"
import Lottie from "lottie-react";
const Hero = () => {
	return (
		<section className={'w-full h-screen '}>
			<div className='bgimg-1'>
				<div className={` ${styles.paddingX} flex items-center position absolute top-24 left-12 grid grid-cols-2 gap-1`}>
					<div className=' text-base '>Hello</div>
					<div className=''>
						<Lottie animationData={heroPageAnimation} loop={true} className="w-1/2"/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
