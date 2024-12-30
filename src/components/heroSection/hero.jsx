import styles from "./hero.module.css"
function Hero(){
    return (
    <div className={styles.hero}>
        <div className={styles.herocontainer}>
            <div className={styles.container}>
                <h1 className={styles.heading1}>Let us find your</h1>
                <h1 className={styles.heading2}>Forever Food.</h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div className={styles.btndiv}>
                    <button className={styles.search}>Search Now</button>
                    <button className={styles.know}>Know More</button>
                </div>
            </div>
        </div>

    </div>
);
}
export default Hero;