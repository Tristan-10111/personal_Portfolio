import React from "react";
import { styles } from "../style";
import aboutIcon from "../assets/lottieFiles/newScene.json";
import Lottie from "lottie-react";

const About = () => {
	return (
		<section className={" w-full bg-aboutBg parralaxDemoDiv"}>
			<div className='flex '>
				<div className=' w-1/2'>
					<Lottie
						animationData={aboutIcon}
						loop={true}
						// className='w-1/2'
					/>
				</div>
				<div className=' text-base text-white w-1/2 mx-9 my-36'>
					<h3 className='my-6'>about me </h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
