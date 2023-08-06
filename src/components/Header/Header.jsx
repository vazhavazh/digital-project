import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import SmallLogo from "../../assets/icons/header/smallLogo";
import { GiHamburgerMenu } from "react-icons/gi";
import MyModal from "../UI/Modal/MyModal";
import Navigation from "../Navigation/Navigation";
const Header = () => {
	const [modal, setModal] = useState(false);
	const closeModal = () => {
		setModal(false);
		 document.documentElement.style.overflow = ""
	};
	const openModal = () => {
		setModal(true);
		document.documentElement.style.overflow = "hidden"
	};
	return (
		<header className={styles.header}>
			<Link
				to={"/"}
				className={styles.logo}>
				<SmallLogo />
			</Link>
			<button
				className={styles.burgerButton}
				onClick={openModal}>
				<GiHamburgerMenu />
			</button>
			<MyModal
				visible={modal}
				setVisible={setModal}>
				<Navigation closeModal={closeModal} />
			</MyModal>
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
		</header>
	);
};

export default Header;
