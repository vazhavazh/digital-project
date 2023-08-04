import React, { useState } from "react";
import styles from "./Hero.module.scss";
import heroImage from "../../assets/img/Hero.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ScrollTrigger from "react-scroll-trigger";
const Hero = () => {
	const [isEntered, setIsEntered] = useState(false);
	const handleONAnimation = () => {
		setIsEntered(true);
	};
	const handleOFFAnimation = () => {
		setIsEntered(false);
	};

	return (
		<ScrollTrigger
			onEnter={handleONAnimation}
			onExit={handleOFFAnimation}>
			<div className={isEntered ? "animateRight" : ""}>
				<div className={styles.heroWrapper}>
					<div className={styles.interfaceContainer}>
						<div className={styles.titleWrapper}>
							<h1 className={styles.mainTitle}>Project</h1>
							<h2 className={styles.projectTitle}>Home</h2>
						</div>
						<div className={styles.btnWrapper}>
							<button className={styles.btn}>
								<span className={styles.iconWrapper}>
									<BsArrowLeft className={styles.icon} />
								</span>
							</button>
							<button className={styles.btn}>
								<span className={styles.iconWrapper}>
									<BsArrowRight className={styles.icon} />
								</span>
							</button>
						</div>
						<div className={styles.counter}>
							<span>01</span>
							<span>02</span>
						</div>
					</div>
					<div className={styles.imageWrapper}>
						<button className={styles.heroBtn}>
							Взглянуть
							<span className={styles.iconWrapper}>
								<BsArrowRight className={styles.icon} />
							</span>
						</button>
						<img
							src={heroImage}
							alt='current project'
						/>
					</div>
				</div>
			</div>
		</ScrollTrigger>
	);
};

export default Hero;
