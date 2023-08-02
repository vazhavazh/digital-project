import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
	return (
		<header className={styles.header}>
			<img
				src={logo}
				alt='logo'
			/>

			<nav>
				<ul className={styles.navWrapper}>
					<li className={styles.navItem}>
						<NavLink
							className={styles.navLink}
							to='/'>
							Главная
						</NavLink>
					</li>
					<li className={styles.navItem}>
						<NavLink
							className={styles.navLink}
							to='gallery'>
							Галерея
						</NavLink>
					</li>
					<li className={styles.navItem}>
						<NavLink
							className={styles.navLink}
							to='projects'>
							Проекты
						</NavLink>
					</li>
					<li className={styles.navItem}>
						<NavLink
							className={styles.navLink}
							to='certificates'>
							Сертификаты
						</NavLink>
					</li>
					<li className={styles.navItem}>
						<NavLink
							className={styles.navLink}
							to='contacts'>
							Контакты
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
