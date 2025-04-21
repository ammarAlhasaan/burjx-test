import { Outlet } from 'react-router'
import styles from './blank-layout.module.scss'
import logo from "@/assets/images/burjx-logo.svg";
import React from "react";

const BlankLayout = () => {
  return (
    <div className={styles.layout}>
      <nav>
        <img src={logo}/>

      </nav>
      <main className={styles.content}>
        <Outlet />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} My Company</p>
      </footer>
    </div>
  )
}

export default BlankLayout
