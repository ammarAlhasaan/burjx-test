import React, {useEffect, useState} from "react";
import styles from './coin-details.module.scss'
import cn from "classnames";
import {Badge, Card, ToggleButtonGroup} from "@/components/ui";

import api from "@/api";
import {CoinDetails as CoinDetailsType, CoinHistoryItem} from "@/types";
import CoinSelect from "@/pages/coin-details/CoinSelect";
import {useNavigate, useParams} from "react-router";
import {formatPrice, getCoinById} from "@/utils";
import {CandlestickChart} from "@/components/shared";

const options = [
  {label: '1D', value: '1'},
  {label: '1W', value: '7'},
  {label: '1M', value: '30'},
  {label: '1Y', value: '365'},
  {label: 'ALL', value: 'max'},
];
const CoinDetails = () => {
  const {id} = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [coinHistory, setCoinHistory] = useState<CoinHistoryItem[]>([]);
  const [allCoins, setAllCoins] = useState<CoinDetailsType[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<CoinDetailsType>();
  const [days, setDays] = useState('1');

  useEffect(() => {

    const fetchAllCoins = async () => {
      const data = await api.coin.all();
      setAllCoins(data.data);
    };
    const fetchCoinHistory = async () => {
      const data = await api.coin.details(id || '', days);
      setCoinHistory(data);
    };

    fetchCoinHistory();
    fetchAllCoins();
    const interval = setInterval(() => {
      fetchCoinHistory();
      fetchAllCoins();
    }, 30000);
    return () => clearInterval(interval);
  }, [id, days]);

  useEffect(() => {
    if (allCoins.length) {
      setSelectedCoin(getCoinById(allCoins, Number(id)))
    }
  }, [id, allCoins]);


  const handleOnSelect = (item: CoinDetailsType) => {
    navigate(`/coins/${item.productId}`);
    setSelectedCoin(item)
  }

  return (
    <div className={styles.coinDetails}>
      <div className="container">
        <CoinSelect allCoins={allCoins} selectedCoin={selectedCoin} onSelect={handleOnSelect}/>
        <Card className={cn("p-4 mb-1 mt-4")}>
          <div className={cn("mb-3")}>
            <p className="text-xl mb-2">{formatPrice(selectedCoin?.currentPrice || 0)}</p>
            <div>
              {selectedCoin && <Badge
                title={`${selectedCoin.priceChangePercentage24h} %`}
                status={selectedCoin.priceChangePercentage24h > 0 ? 'success' : 'error'}/>}
            </div>
          </div>
          <div className={cn("mb-3")}>
            <CandlestickChart chartData={coinHistory}/>
          </div>
          <ToggleButtonGroup
            options={options}
            value={days}
            onChange={setDays}
          />
        </Card>
      </div>
    </div>
  )
}

export default CoinDetails

