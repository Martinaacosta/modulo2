import React from 'react';
import styles from './SearchBar.module.css';
import {IoAdd} from 'react-icons/io5';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const handleOnSearch = () =>{
    const input = document.getElementById('searchInput')
    onSearch(input.value)
    input.value = ''
  };

  return (
  <div className={styles.searchBar}>
    <input  
    className={styles.input} 
    id='searchInput' 
    placeholder ='Agregar una ciudad...' 
    autoComplete='off'
    />

    <button className={styles.button} onClick={handleOnSearch}><IoAdd/></button>
  </div>
  )
};