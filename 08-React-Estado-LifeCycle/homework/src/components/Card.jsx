import React from 'react';
import styles from './Card.module.css'
import { IoCloseCircleOutline } from 'react-icons/io5';

export default function Card(props) {
  const { max, min, name, img, onClose, primary} = props
  // acá va tu código
  return (
    <div className={`${styles.card} ${props.primary ? styles.primary : ''}`}>
      
      <span className={styles.name}>
        {name}
        { !primary && <button className={styles.button} onClick={onClose}>
          <IoCloseCircleOutline />
          </button>}
        </span>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="Icono de imagen"
      />
      <div className={styles.temps}>
        <Temp label='Min' temp={min} />
        <Temp label='Max' temp={max} />
      </div>

    </div>
  )
};


function Temp({ label, temp }) {
  return (
    <div className={styles.temp}>
      <span>{label}</span>
      <span>{temp}</span>
    </div>
  )
}

