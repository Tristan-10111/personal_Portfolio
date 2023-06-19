import React from "react";
// import { styles } from "../style";
import { technologies } from "../Constants";

const Tech = () => {
  return (
    // <section className=' flex flex-col justify-center w-full parralaxDemoDivContact bg-techBg'>
    // 	<h3 className='text-heroText text-center text-4xl font-bold'>
    // 		Tech Stack
    // 	</h3>

    // 	<div className='m-auto  my-12 grid grid-cols-4 gap-4'>
    // 		{technologies.map((tech, ind) => (
    // 			<div
    // 				key={ind}
    // 				className='flex flex-col items-center bg-black py-6 w-60 h-60 rounded-md mx-6 my-6'>
    // 				<img src={tech.icon} className='w-6' />
    // 				<p>{tech.name}</p>
    // 			</div>
    // 		))}
    // 	</div>
    // </section>
    <section className="flex items-center text-heroText  bg-techBg desktop:parralaxDemoDivContact">
      <div className="container px-5 mx-auto">
        <h4 className="desktop:text-4xl tablet:text-6xl text-heroText font-semibold text-center mb-12">
          Tech stack
        </h4>
        <div className="flex flex-wrap justify-center">
          {technologies.map((tech, ind) => (
            <div className="p-4 sm:w-1/2 lg:w-1/4" key={ind}>
              <div
                className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                data-aos="flip-left"
              >
                <p className="text-center">{tech.name}</p>
                <img
                  className="desktop:h-72 w-72 tablet:h-80 phone:w-full object-cover object-center"
                  src={tech.icon}
                  alt="techIcons"
                />
              </div>
            </div>
          ))}
          {/* <div className='p-4 sm:w-1/2 lg:w-1/3'>
						<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
							<img
								className='lg:h-72 md:h-48 w-full object-cover object-center'
								src='https://picsum.photos/id/188/720/400'
								alt='blog'
							/>
						</div>
					</div> */}
          {/* <div className='p-4 sm:w-1/2 lg:w-1/3'>
						<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
							<img
								className='lg:h-72 md:h-48 w-full object-cover object-center'
								src='https://picsum.photos/id/1016/720/400'
								alt='blog'
							/>
						</div>
					</div> */}
          {/* <div className='p-4 sm:w-1/2 lg:w-1/3'>
						<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
							<img
								className='lg:h-72 md:h-48 w-full object-cover object-center'
								src='https://picsum.photos/id/1011/720/400'
								alt='blog'
							/>
						</div>
					</div> */}
        </div>
      </div>
    </section>
  );
};

export default Tech;
