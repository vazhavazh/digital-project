import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import MainTasks from "../components/MainTasks/MainTasks";

const Home = () => {
	return (
		<div>
			<Hero />
			<About />
			<MainTasks />
		</div>
	);
};

export default Home;
