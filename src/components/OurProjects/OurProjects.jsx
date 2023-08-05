import React, { useState } from "react";
import styles from "./OurProjects.module.scss";
import { BsArrowRight } from "react-icons/bs";

import image1 from "../../assets/img/ourProjects/img1.png";
import image2 from "../../assets/img/ourProjects/img2.png";
import image3 from "../../assets/img/ourProjects/img3.png";
import image4 from "../../assets/img/ourProjects/img4.png";
import image5 from "../../assets/img/ourProjects/img5.png";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";

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
					<ul className={styles.photoGrid}>
						<li className={styles.photo}>
							<img
								src={image1}
								alt='project'
							/>
							<div className={styles.photoFrame}>
								<h4 className={styles.photoTitle}>ДОСУГОВЫЙ ЦЕНТР</h4>
								<Link
									className={styles.aboutLink}
									to={"projects"}>
									ПОДРОБНЕЕ
									<span className={styles.iconWrapper}>
										<BsArrowRight className={styles.icon} />
									</span>
								</Link>
							</div>
						</li>

						<li className={styles.photo}>
							<img
								src={image2}
								alt='project'
							/>
						</li>

						<li className={styles.photo}>
							<img
								src={image3}
								alt='project'
							/>
						</li>
						<li className={styles.photo}>
							<img
								src={image4}
								alt='project'
							/>
						</li>
						<li className={styles.photo}>
							<img
								src={image5}
								alt='project'
							/>
						</li>
					</ul>

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
