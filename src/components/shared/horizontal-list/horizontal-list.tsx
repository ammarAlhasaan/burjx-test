import React, {useEffect, useRef, useState} from "react";
import styles from "./horizontal-list.module.scss";

type HorizontalListProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  pageSize?: number;
};

const HorizontalList = <T, >(
  {
    data,
    renderItem,
    pageSize = 10,
  }: HorizontalListProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [visibleItems, setVisibleItems] = useState<T[]>([]);

  const loadMore = () => {
    setVisibleItems((prev) => {
      const nextItems = data?.slice(prev.length, prev.length + pageSize);
      return nextItems ? [...prev, ...nextItems] : [...prev];
    });
  };

  useEffect(() => {
    setVisibleItems([]); // reset on data change
    loadMore();
  }, [data]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    const atEnd = scrollLeft + clientWidth >= scrollWidth - 50;
    if (atEnd) {
      loadMore();
    }
  };

  return (
    <div
      className={styles.scrollContainer}
      ref={containerRef}
      onScroll={handleScroll}
    >
      {visibleItems.map((item, index) => renderItem(item, index))}
    </div>
  );
};

export default HorizontalList;
