import React from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import SmallLogo from "../../assets/icons/header/smallLogo";
const Header = () => {
	return (
		<header className={styles.header}>
			<Link to={"/"}>
				<SmallLogo />
			</Link>

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
