<Parallax pages={4} ref={ref}>
	{/* navbar and hero page */}
	<ParallaxLayer
		offset={0}
		speed={1}
		factor={2}
		style={{
			backgroundImage: `url(${moonImage})`,
			backgroundSize: "cover",
		}}
	/>
	<Navbar />
	{/* <ParallaxLayer
    speed={0.05}
    offset={0.2}
    onClick={() => ref.current.scrollTo(4)}>
    <Hero />
</ParallaxLayer> */}

	{/* </ParallaxLayer> */}
	<ParallaxLayer
		offset={1}
		speed={1}
		factor={3}
		style={{
			backgroundImage: `url(${landingImage})`,
			backgroundSize: "contain",
		}}
	/>
	{/* <ParallaxLayer
    offset={2}
    speed={1}
    factor={4}
    style={{
        backgroundImage: `url(${underGroundImage})`,
        backgroundSize: "contain",
    }}
/> */}
	{/* <ParallaxLayer
    offset={1.2}
    speed={1}
    onClick={() => ref.current.scrollTo(3)}>
    <About />
</ParallaxLayer>

<ParallaxLayer
    offset={2}
    speed={1}
    onClick={() => ref.current.scrollTo(2)}>
    <Tech />
</ParallaxLayer> */}

	{/* <ParallaxLayer
    offset={3}
    speed={1}
    onClick={() => ref.current.scrollTo(0)}>
    <Contact />
</ParallaxLayer> */}

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
</Parallax>;

style = "background-color:transparent;font-size:25px;color: #f7f7f7;";
