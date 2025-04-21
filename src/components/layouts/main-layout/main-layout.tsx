import {Link, Outlet} from 'react-router'
import styles from './main-layout.module.scss'
import logo from "@/assets/images/burjx-logo.svg";
import React from "react";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <nav className="container flex-center">
        <Link to="/">
          <img src={logo} alt="Burjx" className={styles.logo}/>
        </Link>

      </nav>
      <main className={styles.content}>
        <Outlet/>
      </main>
    </div>
  )
}

export default MainLayout
