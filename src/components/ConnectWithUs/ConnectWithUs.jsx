import React from "react";
import styles from "./ConnectWithUs.module.scss";

const ConnectWithUs = () => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Связаться с нами</h3>
			<form className={styles.form}>
				<label className={styles.placeinput}>
					<input
						required
						type='text'
						id='text'
					/>
					<div className={styles.place_holder}>Имя</div>
				</label>

				<label className={styles.placeinput}>
					<input
						required
						type='text'
						id='text'
					/>
					<div className={styles.place_holder}>
						Номер телефона<span>*</span>
					</div>
				</label>
				<label className={styles.placeinput}>
					<input
						required
						type='text'
						id='text'
					/>
					<div className={styles.place_holder}>
						E-mail<span>*</span>
					</div>
				</label>
				<label className={styles.placeinput}>
					<input
						required
						type='text'
						id='text'
					/>
					<div className={styles.place_holder}>Интересующий товар/услуга</div>
				</label>
				<label className={styles.placeinput}>
					<textarea
						required
						type='text'
						id='text'
					/>
					<div className={styles.place_holder}>
						Сообщение<span>*</span>
					</div>
				</label>

				{/* <input
					type='text'
					placeholder='Имя'
				/>
				<input
					type='text'
					placeholder='Номер телефона '
				/>
				<input
					type='text'
					placeholder='E-mail'
				/>
				<input
					type='text'
					placeholder='Интересующий товар/услуга'
				/>
				<textarea
					type='text'
					placeholder='Сообщение'
				/> */}
			</form>
		</div>
	);
};

export default ConnectWithUs;
