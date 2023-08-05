import React from "react";
import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Icon1 } from "../../assets/icons/footer/contacts/icon1.svg";
import { ReactComponent as Icon2 } from "../../assets/icons/footer/contacts/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/icons/footer/contacts/icon3.svg";

import { ReactComponent as Facebook } from "../../assets/icons/footer/socialMedia/facebook.svg";
import { ReactComponent as Linked } from "../../assets/icons/footer/socialMedia/linkedIn.svg";
import { ReactComponent as Pininterest } from "../../assets/icons/footer/socialMedia/pininterest.svg";
import { ReactComponent as Twitter } from "../../assets/icons/footer/socialMedia/twitter.svg";

import bigLogo from "../../assets/img/footer/bigLogo.png";
const Footer = () => {
	return (
		<div className={styles.flexCont}>
			<div className={styles.container}>
				<Link to='/'className={styles.logoLink}>
					<img
						src={bigLogo}
						alt='logo'
					/>
				</Link>

				<div className={styles.navContainer}>
					<h4 className={styles.title}>Информация</h4>
					<ul className={styles.navList}>
						<li>
							<NavLink
								className={styles.navLink}
								to='/'>
								Главная
							</NavLink>
						</li>
						<li>
							<NavLink
								className={styles.navLink}
								to='gallery'>
								Галерея
							</NavLink>
						</li>
						<li>
							<NavLink
								className={styles.navLink}
								to='projects'>
								Проекты
							</NavLink>
						</li>
						<li>
							<NavLink
								className={styles.navLink}
								to='certificates'>
								Сертификаты
							</NavLink>
						</li>
						<li>
							<NavLink
								className={styles.navLink}
								to='contacts'>
								Контакты
							</NavLink>
						</li>
					</ul>
				</div>
				<div>
					<h4 className={styles.title}>Контакты</h4>
					<ul className={styles.contactList}>
						<li>
							<Link
								className={styles.contactLink}
								to='https://goo.gl/maps/Z5adjri6u8g9tkpN6'
								target='_blank'
								rel='noopener noreferrer nofollow'>
								<Icon3 />
								<span>
									100000, Республика Казахстан, г. Караганда, ул. Телевизионная
									10
								</span>
							</Link>
						</li>
						<li>
							<Link
								className={styles.contactLink}
								to='tel:+380000000000'>
								<Icon2 />
								<span>+38 (000) 000 00 00</span>
							</Link>
						</li>
						<li>
							<Link
								className={styles.contactLink}
								to='mailto:mail@gmail.com'
								lang='en'>
								<Icon1 />
								<span>mail@gmail.com</span>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h4 className={styles.title}>Социальные сети</h4>
					<ul className={styles.socialIconsList}>
						<li>
							<Link>
								<Facebook />
							</Link>
						</li>
						<li>
							<Link>
								<Linked />
							</Link>
						</li>
						<li>
							<Link>
								<Pininterest />
							</Link>
						</li>
						<li>
							<Link>
								<Twitter />
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<span className={styles.allRights}>
				© 2019 Digital Project. Все права защищены.
			</span>
		</div>
	);
};

export default Footer;
