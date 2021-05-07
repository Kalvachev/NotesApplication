import { useState } from 'react';
import styles from './AddNote.module.scss'

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (e) => {
		if (characterLimit - e.target.value.length >= 0) {
			setNoteText(e.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className={styles.noteContainer}>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add new note ...'
				value={noteText}
				onChange={handleChange}
				className={styles.textContainer}
			></textarea>

			<div className={styles.noteFooterPart}>
				<div className={styles.remaining}>{characterLimit - noteText.length} Remaining</div>

				<button className={styles.saveButton} onClick={handleSaveClick}>Save 💾</button>
			</div>
		</div>
	);
};

export default AddNote;
