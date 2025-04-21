import React, { useEffect, useState } from 'react';
import styles from './tab.module.scss';
import cn from "classnames"; // optional SCSS styling

type TabItem = {
  tabKey: string;
  label: string;
};

type TabsProps = {
  tabs: TabItem[];
  selectedTab?: string;
  onTabChange?: (tabKey: string) => void;
  className?: string;
};

const Tab = ({ tabs, selectedTab, onTabChange, className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(selectedTab || tabs[0]?.tabKey);

  useEffect(() => {
    if (selectedTab && selectedTab !== activeTab) {
      setActiveTab(selectedTab);
    }
  }, [selectedTab]);

  const handleTabClick = (key: string) => {
    setActiveTab(key);
    onTabChange?.(key);
  };

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab.tabKey}
          className={cn(`${styles.tab} ${tab.tabKey === activeTab ? styles.active : ''}`, className)}
          onClick={() => handleTabClick(tab.tabKey)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tab;
