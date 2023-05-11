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

const App = () => {
	return (
		<BrowserRouter>
			<div className=' '>
				<div className=''>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className=''>
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
