import React, { useState } from "react";
import styles from "./OurProjects.module.scss";
import { BsArrowRight } from "react-icons/bs";

import image1 from "../../assets/img/ourProjects/img1.png";
import image2 from "../../assets/img/ourProjects/img2.png";
import image3 from "../../assets/img/ourProjects/img3.png";
import image4 from "../../assets/img/ourProjects/img4.png";
import image5 from "../../assets/img/ourProjects/img5.png";
import ScrollTrigger from "react-scroll-trigger";

const OurProjects = () => {
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
			<div className={isEntered ? "animateLeft" : ""}>
				<div className={styles.container}>
					<h3 className={styles.title}>Наши проекты</h3>
					<div className={styles.photoGrid}>
						<div className={styles.row}>
							<img
								src={image1}
								alt='project'
								className={styles.photo}
							/>
							<img
								src={image2}
								alt='project'
								className={styles.photo}
							/>
						</div>
						<div className={styles.row}>
							<img
								src={image3}
								alt='project'
								className={styles.photo}
							/>
							<img
								src={image4}
								alt='project'
								className={styles.photo}
							/>
							<img
								src={image5}
								alt='project'
								className={styles.photo}
							/>
						</div>
					</div>

					<button className={styles.ourProjectBtn}>
						ВСЕ ПРОЕКТЫ
						<span className={styles.iconWrapper}>
							<BsArrowRight className={styles.icon} />
						</span>
					</button>
				</div>
			</div>
		</ScrollTrigger>
	);
};

export default OurProjects;
