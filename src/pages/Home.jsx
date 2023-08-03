import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import MainTasks from "../components/MainTasks/MainTasks";
import OurProjects from "../components/OurProjects/OurProjects";
import ConnectWithUs from "../components/ConnectWithUs/ConnectWithUs";

const Home = () => {
	return (
		<div>
			<Hero />
			<About />
			<MainTasks />
			<OurProjects />
			<ConnectWithUs />
		</div>
	);
};

export default Home;
