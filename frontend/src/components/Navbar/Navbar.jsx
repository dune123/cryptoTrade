import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <img src="./logo.png" alt="" className={styles.logo}/>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className={styles.navRight}>
            <select>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign Up <img src="./arrow_icon.png "/></button>
        </div>
    </div>
  )
}

export default Navbar