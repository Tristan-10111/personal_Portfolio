import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { tristan, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [menuToggle, setMenuToggle] = useState(false);

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center  bg-navbarBg z-20 fixed  top-0 `}>
			<div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
				<Link
					to='/'
					className='flex items-center gap-2'
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}>
					<img src={tristan} alt='logo' className='w-24  object-contain' />
				</Link>
				<ul className='list-none hidden sm:flex flex-row gap-10'>
					{navLinks.map((links) => (
						<li
							key={links.id}
							className={`${
								active === links.title ? "activeText " : "text-white"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(links.title)}>
							<a href={`#${links.id}`}>{links.title}</a>
						</li>
					))}
				</ul>
				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<img
						src={menuToggle ? close : menu}
						alt='menu'
						className='w-8 h-8 object-contain cursor pointer z-20'
						onClick={() => setMenuToggle(!menuToggle)}
					/>
				</div>
				<div
					className={`${
						!menuToggle ? "hidden" : "flex"
					} bg-menuBg w-45 absolute top-5 right-0 p-6 w-48 h-80 rounded-xl z-10`}>
					<ul className='list-none flex justify-center items-start flex-col gap-12'>
						{navLinks.map((links) => (
							<li
								key={links.id}
								className={`${
									active === links.title ? "text-white" : "text-secondary"
								} hover:text-white text-[18px] font-medium cursor-pointer`}
								onClick={() => setActive(links.title)}>
								<a href={`#${links.id}`}>{links.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
