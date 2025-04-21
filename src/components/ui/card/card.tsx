import React from 'react'
import styles from './card.module.scss'
import {useTheme} from "@/theme";


export type CardProps = {
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void
}

const Card = ({title, description, className, children, onClick}: CardProps) => {
  const {theme} = useTheme()

  return (
    <div className={`${styles.card} ${styles[theme]} ${className}`} onClick={onClick}>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}

export default Card
