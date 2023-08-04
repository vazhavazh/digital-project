import React, { useState } from "react";
import styles from "./About.module.scss";
import preview1 from "../../assets/img/about/img1.jpg";
import preview2 from "../../assets/img/about/img2.jpg";
import preview3 from "../../assets/img/about/img3.jpg";
import { BsArrowRight } from "react-icons/bs";
import ScrollTrigger from "react-scroll-trigger";

const About = () => {
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
					<div className={styles.previewWrapper}>
						<img
							className={styles.preview1}
							src={preview1}
							alt='preview'
						/>
						<img
							className={styles.preview2}
							src={preview2}
							alt='preview'
						/>
					</div>
					<div className={styles.preview3Wrapper}>
						<img
							className={styles.preview3}
							src={preview3}
							alt='preview'
						/>
					</div>
					<div className={styles.textWrapper}>
						<h3 className={styles.aboutTitle}>О компании</h3>
						<p className={styles.aboutDescription}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
						</p>
						<button className={styles.aboutBtn}>
							Читать
							<span className={styles.iconWrapper}>
								<BsArrowRight className={styles.icon} />
							</span>
						</button>
					</div>
				</div>
			</div>
		</ScrollTrigger>
	);
};

export default About;
