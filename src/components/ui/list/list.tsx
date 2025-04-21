import React, {useEffect, useRef} from 'react'
import cn from "classnames";

import styles from './list.module.scss'

type ListProps<T> = {
  headers?: string[]
  data: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  onLoadMore?: () => void
  headerClassName?: string
}


type ListItemProps = {
  children: React.ReactNode
}

type ListItemCellProps = {
  children: React.ReactNode
  className?: string
  align?: 'left' | 'center' | 'right';
  justify?: 'flex-end' | 'center' | 'flex-start';
}
export const ListItem: React.FC<ListItemProps> & {
  Cell: React.FC<ListItemCellProps>
} = ({children}) => {
  return <div className={styles.row}>{children}</div>
}


const Cell = ({children, className = '', align = 'left', justify = 'center'}: ListItemCellProps) => {
  return (
    <div
      className={`${styles.cell} ${className}`}
      style={{textAlign: align, justifyContent: justify}}
    >
      {children}
    </div>
  )
}

ListItem.Cell = Cell

function List<T>({headers, data, renderItem, onLoadMore, headerClassName}: ListProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const loadingRef = useRef(false)

  const handleScroll = () => {
    const container = containerRef.current
    if (!container || !onLoadMore || loadingRef.current) return

    const {scrollTop, scrollHeight, clientHeight} = container
    const atBottom = scrollTop + clientHeight >= scrollHeight - 50

    if (atBottom) {
      loadingRef.current = true
      onLoadMore()
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container || !onLoadMore) return

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (loadingRef.current) {
      loadingRef.current = false
    }
  }, [data])

  return (
    <div className={styles.list} ref={containerRef}>
      {headers && (
        <div className={cn(styles.header, headerClassName)}>
          {headers.map((header, index) => (
            <div key={index} className={`${styles.cell} ${styles.headerCell}`}>
              {header}
            </div>
          ))}
        </div>
      )}

      {data.map((item, index) => (
        renderItem(item, index)
      ))}
    </div>
  )
}

export default List
