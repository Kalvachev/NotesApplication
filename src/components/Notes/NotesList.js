import Note from './Note';
import AddNote from '../AddNote/AddNote';
import styles from './Notes.module.scss'

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
	return (
		<div className={styles.noteList}>
			{notes.map((note) => (
				<Note
					key={note.id}
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}

			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;
