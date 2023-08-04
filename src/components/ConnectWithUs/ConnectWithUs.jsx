import React, { useState } from "react";
import styles from "./ConnectWithUs.module.scss";
import { IoMdCheckmark } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import photoConnectWithUs from "../../assets/img/contactWithUs/img1.png";
import ScrollTrigger from "react-scroll-trigger";

const ConnectWithUs = () => {
	const [isEntered, setIsEntered] = useState(false);
	const [checked, setChecked] = useState(false);
	
	const handleONAnimation = () => {
		setIsEntered(true);
	};
	const handleOFFAnimation = () => {
		setIsEntered(false);
	};

	const handleCheckboxChange = () => {
		setChecked(!checked);
	};
	return (
		<ScrollTrigger
			onEnter={handleONAnimation}
			onExit={handleOFFAnimation}>
			<div className={isEntered ? "animateRight" : ""}>
				<div className={styles.container}>
					<h3 className={styles.title}>Связаться с нами</h3>

					<div className={styles.flexContainer}>
						<form className={styles.form}>
							<label className={styles.placeinput}>
								<input
									type='text'
									id='name'
									required
								/>
								<div className={styles.place_holder}>Имя</div>
							</label>

							<label className={styles.placeinput}>
								<input
									id='tel'
									required
									type='tel'
								/>
								<div className={styles.place_holder}>
									Номер телефона<span>*</span>
								</div>
							</label>
							<label className={styles.placeinput}>
								<input
									required
									type='email'
									id='email'
								/>
								<div className={styles.place_holder}>
									E-mail<span>*</span>
								</div>
							</label>
							<label className={styles.placeinput}>
								<input
									id='good'
									type='text'
									required
								/>
								<div className={styles.place_holder}>
									Интересующий товар/услуга
								</div>
							</label>
							<div className={styles.textareaContainer}>
								<label className={styles.placeinput}>
									<textarea
										required
										type='text'
										id='message'
									/>

									<div className={styles.place_holderTextArea}>
										Сообщение<span>*</span>
									</div>
								</label>
							</div>

							<label className={styles.checkboxLabel}>
								<input
									className={styles.checkbox}
									type='checkbox'
									checked={checked}
									onChange={handleCheckboxChange}
								/>
								<span className={styles.iconWrapper}>
									{checked && <IoMdCheckmark />}
								</span>
								<span className={styles.rule}>
									Отправляя заявку Вы соглашаетесь с политикой
									конфиденциальности
								</span>
							</label>
							<button className={styles.ourProjectBtn}>
								ОТПРАВИТЬ
								<span className={styles.iconWrapperNew}>
									<BsArrowRight className={styles.icon} />
								</span>
							</button>
						</form>
						<div className={styles.photoWrapper}>
							<img
								src={photoConnectWithUs}
								alt='Person call via mobile'
							/>
						</div>
					</div>
				</div>
			</div>
		</ScrollTrigger>
	);
};

export default ConnectWithUs;
