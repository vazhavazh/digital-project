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
					<li>
						<NavLink to='/'>Главная</NavLink>
					</li>
					<li>
						<NavLink to='gallery'>Галерея</NavLink>
					</li>
					<li>
						<NavLink to=''>Проекты</NavLink>
					</li>
					<li>
						<NavLink to=''>Сертификаты</NavLink>
					</li>
					<li>
						<NavLink to=''>Контакты</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
