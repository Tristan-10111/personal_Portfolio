import React, { useRef, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Footer } from "./Components";
import { Hero, About, Contact, Experience, Tech } from "./Screens";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
	// const ref = useRef();
	useEffect(() => {
		Aos.init();
	}, [Aos]);
	return (
		<BrowserRouter>
			<Navbar />
			<Hero />
			<div className='spacer layer'></div>
			<About />
			<div className='spacer layer2'></div>
			<Tech />
			<div className='spacer layer'></div>
			<Experience />
			<div className='spacer layer2'></div>
			<Contact />
			<div className='spacer layer'></div>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
