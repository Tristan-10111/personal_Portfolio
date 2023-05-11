import React from "react";
// import { motion } from "framer-motion";
import { styles } from "../style";
// import { ComputersCanvas } from "./canvas";
import {testImage1} from "../assets/index"

const Hero = () => {
	return (
		<section className='container w-full h-screen mx-auto '>
			{/* <div className={`${styles.paddingX}`}>Landing</div>
			<div className={`${styles.paddingX}`}>Landing</div>
			<div className={`${styles.paddingX}`}>Landing</div>
			<div className={`${styles.paddingX}`}>Landing</div>
			<div className={`${styles.paddingX}`}>Landing</div>
			<div className={`${styles.paddingX}`}>Landing</div>
			<div className={`${styles.paddingX}`}>Landing</div>
			<div className={`${styles.paddingX}`}>Landing</div> */}
			<p>landing</p>
			<img src={testImage1} alt="testImage1"/>
		</section>
	);
};

export default Hero;
