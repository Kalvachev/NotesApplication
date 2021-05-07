import React from 'react';
import styles from './Header.module.scss'

const Header = ({ handleToggleMode }) => {
	return (
		<div className={styles.headerContainer}>
			<h1 className={styles.header}>Notes Application 📝</h1>

			<button
				onClick={() => handleToggleMode((prevMode) => !prevMode)}
				className={styles.toggleButton}
			>
				Toggle 🔄
			</button>
		</div>
	);
};

export default Header;
