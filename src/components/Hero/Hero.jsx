import React from "react";
import styles from "./Hero.module.scss";
import heroImage from "../../assets/img/Hero.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const Hero = () => {
	return (
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
			</div>
			<img
				src={heroImage}
				alt='current project'
			/>
		</div>
	);
};

export default Hero;
