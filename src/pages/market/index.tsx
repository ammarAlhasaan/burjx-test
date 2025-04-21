import React, {useEffect, useState} from "react";
import {List} from "@/components/ui";
import api from "@/api";
import {CoinDetails, CoinGroups} from "@/types";
import {getGroupedCoins} from "@/utils";
import CoinGroupsTabs from "@/pages/market/CoinGroupsTabs";

import styles from './market.module.scss';
import CoinItem from "@/pages/market/CoinItem";


const PAGE_SIZE = 10
const Market = () => {
  const [groupedCoins, setGroupedCoins] = useState<CoinGroups>();
  const [coins, setCoins] = useState<CoinDetails[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Fetch paginated coins for "All Coins"
  const fetchCoins = async (pageNum = 1, append = false) => {
    try {
      setLoading(true);
      const res = await api.coin.list(1, pageNum * PAGE_SIZE);
      const newCoins = res.data; // assuming res.data.data holds the array
      const totalPages = res.totalPages;

      if (append) {
        setCoins(prev => [...prev, ...newCoins]);
      } else {
        setCoins(newCoins);
      }

      setHasMore(pageNum < totalPages);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (hasMore && !loading) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchCoins(nextPage);
    }
  };

  // Fetch grouped coins and initial paginated coins
  useEffect(() => {
    const fetchGroupedCoins = async () => {
      try {
        const data = await api.coin.all();
        setGroupedCoins(getGroupedCoins(data.data));
      } catch (err) {
        console.error("Failed to fetch grouped coins:", err);
      }
    };

    fetchGroupedCoins();
    fetchCoins(1);

    const interval = setInterval(() => {
      fetchGroupedCoins();
      fetchCoins(page);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div>
        <h3>Markets</h3>
        <CoinGroupsTabs groups={groupedCoins}/>
      </div>
      <div>
        <h3 style={{color: "#fff"}}>All Coins</h3>
        <List
          headerClassName={styles.allCoinsHeader}
          headers={[
            "Market Name",
            "Market Cap",
            "Trading Volume",
            "24h Chart",
            "Price",
            "24h Change",
            "",
          ]}
          data={coins}
          renderItem={(coin) => <CoinItem coin={coin}/>}
          onLoadMore={() => {
            handleLoadMore();
          }}
        />
      </div>
    </div>
  );
};

export default Market;
