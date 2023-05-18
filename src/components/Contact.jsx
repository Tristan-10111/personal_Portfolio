import React from "react";
import Lottie from "lottie-react";
import ContactAnimation from "../assets/lottieFiles/Work frome Home Mailing F 2.json";

const Contact = () => {
	return (
		<>
			<section className={" w-full parralaxDemoDivContact bg-techBg "}>
				<div className='flex '>
					<div className=' text-base text-white w-1/2 mx-9 my-24'>
						<h3 className='my-6 text-heroText text-4xl font-bold'>
							Contact me{" "}
						</h3>
						<p className='text-heroText'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</p>
					</div>
					<div className=' w-1/2'>
						<Lottie
							animationData={ContactAnimation}
							loop={true}
							// className='w-1/2'
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
