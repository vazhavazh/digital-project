import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import MainTasks from "../../components/MainTasks/MainTasks";
import OurProjects from "../../components/OurProjects/OurProjects";
import ConnectWithUs from "../../components/ConnectWithUs/ConnectWithUs";

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<MainTasks />
			<OurProjects />
			<ConnectWithUs />
		</>
	);
};

export default Home;
