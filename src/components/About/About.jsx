import React from 'react'
import styles from "./About.module.scss";
import preview1 from "../../assets/img/about/img1.jpg";
import preview2 from "../../assets/img/about/img2.jpg";


const About = () => {
  return (
		<div className={styles.container}>
			<div className={styles.previewWrapper}>
				<img
					src={preview1}
					alt=''
				/>
				<img
					src={preview2}
					alt=''
				/>
			</div>
		</div>
	);
}

export default About
