import React, { useState } from "react";
import styles from "./MainTasks.module.scss";
import ScrollTrigger from "react-scroll-trigger";

const MainTasks = () => {
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
				<div className={styles.container}>
					<h3 className={styles.title}>Основные задачи</h3>
					<ul className={styles.tasksWrapper}>
						<li className={styles.taskItem}>
							<div className={styles.indexWrapper}>
								<span className={styles.taskIndex}>1</span>
							</div>
							<div className={styles.descrWrapper}>
								<p className={styles.taskDescription}>
									Создание комфортных условий и повышение качества обслуживания
									клиентов
								</p>
							</div>
						</li>
						<li className={styles.taskItem}>
							<div className={styles.indexWrapper}>
								<span className={styles.taskIndex}>2</span>
							</div>
							<div className={styles.descrWrapper}>
								<p className={styles.taskDescription}>
									Постоянно совершенствовать качество предоставляемых услуг
									путем обучения персонала, закупки нового оборудования и
									усиленной рекламы на рынке
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</ScrollTrigger>
	);
};

export default MainTasks;
