import React from "react";
import { styles } from "../style";
import { profileImage } from "../assets";

const About = () => {
	return (
		<section className={" w-full bg-aboutBg parralaxDemoDiv"}>
			<div className='flex '>
				<div className='w-1/2 my-12 mx-12' data-aos='fade-right'>
					<img src={profileImage} alt='profileImage' className='profileImg' />
				</div>
				<div
					className=' text-base text-white w-1/2 mx-9 my-24'
					data-aos='fade-down'>
					<h3 className='my-6 activeText text-4xl font-bold'>About me </h3>
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
