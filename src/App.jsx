import React, {useRef} from "react";
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
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { moonImage, landingImage } from "./assets/index";

const App = () => {
  const ref = useRef();
  return (
    <BrowserRouter>
      <Parallax pages={4} ref={ref}>
		{/* navbar and hero page */}
        {/* <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moonImage})`,
            backgroundSize: "cover",
          }}
        > */}
          {/* <Navbar /> */}
          <ParallaxLayer
            speed={0.05}
            offset={0.2}
            onClick={() => ref.current.scrollTo(4)}
          >
            <Hero />
          </ParallaxLayer> 
		  
        {/* </ParallaxLayer> */}
        {/* <ParallaxLayer
          offset={1}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${landingImage})`,
            backgroundSize: "cover",
          }}
        > */}
		    <ParallaxLayer
          offset={1.2}
          speed={1}
         onClick={() => ref.current.scrollTo(3)}
        >
          <About />
        </ParallaxLayer>

		    <ParallaxLayer
          offset={2}
          speed={1}
         onClick={() => ref.current.scrollTo(2)}
        >
         <Tech />
        </ParallaxLayer>  

		    <ParallaxLayer
          offset={3}
          speed={1}
         onClick={() => ref.current.scrollTo(0)}
        >
			<Contact />
        </ParallaxLayer>  

		{/* <About /> */}
        {/* </ParallaxLayer> */}
        {/* <ParallaxLayer
          speed={0.05}
          offset={0.2}
          onClick={() => ref.current.scrollTo(2)}
        >
          <Hero />
        </ParallaxLayer> */}
       
        {/* <Experience />
				
				<Works />
				<Feedbacks />
				<div className=''>
					
					<StarsCanvas />
				</div> */}
      </Parallax>
    </BrowserRouter>
  );
};

export default App;
