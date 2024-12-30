import styles from './header.module.css'
function Header(){
    return <div className={styles.header}>
       <div className={styles.headerDiv}>
        <div className={styles.logodiv}>
            <img className={styles.logo} src="https://flowbite.com/docs/images/logo.svg" alt="" />
            <h1 className={styles.logoName}>GeekFood</h1>
        </div>
        <ul className={styles.list}>
            <li>Home</li>
            <li>Quote</li>
           <li>Resturants</li> 
           <li>Foods</li>
           <li>Contact</li>
        </ul>
        <button className={styles.btn}>Get started</button>
        <div className={styles.bar}>
        <i className="fa-solid fa-bars"></i>
        </div>
       </div>
    </div>
}
export default Header;