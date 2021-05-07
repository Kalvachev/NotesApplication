import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import styles from './Search.module.scss'

const Search = ({ handleSearch }) => {
	return (
		<div className={styles.searchContainer}>
			<BiSearchAlt className={styles.searchIcon} size='1.4em' />

			<input
				className={styles.searchInput}
				onChange={(e) => handleSearch(e.target.value)}
				type='text'
				placeholder='Type to search ...'
			/>
		</div>
	);
};

export default Search;
