import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import NotesList from './components/Notes/NotesList';
import Search from './components/Search/Search';
import Header from './components/Header/Header';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: uuid(),
			text: 'Demo note!',
			date: '20/04/2021',
		},
	]);

	const [textSearch, setTextSearch] = useState('');
	const [toggleMode, setToggleMode] = useState(false);

	useEffect(() => {
		const allSavedNotes = JSON.parse(localStorage.getItem('savedNotes'));

		if (allSavedNotes) {
			setNotes(allSavedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('savedNotes', JSON.stringify(notes));
	}, [notes]);

	const addNewNote = (data) => {
		const currentDate = new Date();

		const newNote = {
			id: uuid(),
			text: data,
			date: currentDate.toLocaleDateString(),
		};

		const newNotesData = [...notes, newNote];
		setNotes(newNotesData);
	};

	const deleteChosenNote = (id) => {
		const newNotesData = notes.filter((note) => note.id !== id);
		setNotes(newNotesData);
	};

	return (
		<div className={`${toggleMode && 'darkMode'}`}>
			<div className='mainContainer'>
				<Header handleToggleMode={setToggleMode} />
				<Search handleSearch={setTextSearch} />

				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(textSearch) || note.text.includes(textSearch)
					)}
					
					handleAddNote={addNewNote}
					handleDeleteNote={deleteChosenNote}
				/>
			</div>
		</div>
	);
};

export default App;
