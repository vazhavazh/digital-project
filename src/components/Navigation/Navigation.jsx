import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss'
const Navigation = ({ closeModal }) => {
	return (
		<ul className={styles.navWrapper}>
			<li className={styles.navItem}>
				<NavLink
					onClick={() => closeModal()}
					className={styles.navLink}
					to='/'>
					Главная
				</NavLink>
			</li>
			<li className={styles.navItem}>
				<NavLink
					className={styles.navLink}
					onClick={() => closeModal()}
					to='gallery'>
					Галерея
				</NavLink>
			</li>
			<li className={styles.navItem}>
				<NavLink
					onClick={() => closeModal()}
					className={styles.navLink}
					to='projects'>
					Проекты
				</NavLink>
			</li>
			<li className={styles.navItem}>
				<NavLink
					onClick={() => closeModal()}
					className={styles.navLink}
					to='certificates'>
					Сертификаты
				</NavLink>
			</li>
			<li className={styles.navItem}>
				<NavLink
					onClick={() => closeModal()}
					className={styles.navLink}
					to='contacts'>
					Контакты
				</NavLink>
			</li>
		</ul>
	);
};

export default Navigation
