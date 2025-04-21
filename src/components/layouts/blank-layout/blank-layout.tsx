import { Outlet } from 'react-router'
import styles from './blank-layout.module.scss'
import React from "react";

const BlankLayout = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  )
}

export default BlankLayout
