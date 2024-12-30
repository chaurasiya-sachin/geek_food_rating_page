import styles from './card.module.css'

function Card({ para, name }) {
    return (
      <div className={styles.Card}>
        <p className={styles.para}>{para}</p>
        <p className={styles.name}>{name}</p>
      </div>
    );
  }
  
  export default Card;
  