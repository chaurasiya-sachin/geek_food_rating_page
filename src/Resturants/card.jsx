import styles from './card.module.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot  } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'
const Card =(props) =>{
let rountofRating = Math.round(props.rating);
const star = "⭐";
const rate = star.repeat(rountofRating);
    return (
        <div className={styles.card}>
            <div className={styles.top}>
            <div className={styles.namest}>
                <p>{props.name}</p>
                <p>{rate}</p>
            </div>
            
            <p  className={styles.add}><FontAwesomeIcon icon={faLocationDot} /> {props.address}</p>
            <p className={styles.post}><span>{props.outcode}</span>{" "} <span>{props.postcode}</span></p>
            </div>

            <div className={styles.bottom}>
                <p className={styles.foodtype}>{props.type_of_food}</p>
                <a className={styles.menu} href={props.URL}>Visit Menu</a>
            </div>
        </div>
    )
}
export default Card