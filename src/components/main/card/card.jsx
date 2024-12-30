import styles from './card.module.css';

function Card ({ text, name = "Gladis Lennon", designation = "Head of SEO" }){
   
    return(
        <div className={styles.card}>
            <div className={styles.cardpara}>
                <div className={styles.contant}>
                    <p>{text}</p>
                </div>
            </div>
            <div className={styles.cardautor}>
                <div className={styles.profile}>
                    <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="" />
                </div>
                <div className={styles.name}>
                    <h3>{name}</h3>
                    <p>{designation}</p>
                </div>
            </div>
        </div>
    )
}
export default Card;