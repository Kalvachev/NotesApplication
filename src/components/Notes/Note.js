import { MdDelete } from 'react-icons/md';
import styles from './Notes.module.scss'

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className={styles.noteContainer}>
			<div className={styles.headerPart}>{text}</div>

			<div className={styles.noteFooterPart}>
				<div className={styles.dateContainer}>{date}</div>

				<MdDelete
					onClick={() => handleDeleteNote(id)}
					className={styles.deleteIcon}
					size='1.4em'
				/>
			</div>
		</div>
	);
};

export default Note;
