import React from "react";
import styles from "./coin-card.module.scss"
import {Badge, Card} from "@/components/ui";
import cn from "classnames";
import Trend from "../trend";
import {CoinDetails} from "@/types";
import {CoinInfo} from "@/components/shared";
import {formatPrice} from "@/utils";


const CoinCard = ({coin}: { coin: CoinDetails }) => {

  return (
    <Card className={styles.coinCard}>
      <div className="mb-3">
        <CoinInfo coin={coin}/>
      </div>
      <div className="mb-3">
        <Trend
          key={coin.name}
          data={coin.sparkline}
          status={coin.priceChangePercentage24h > 0 ? 'success' : 'error'}
        />
      </div>
      <div className={cn(styles.coinInfo, "d-flex justify-content-between")}>
        <p>{formatPrice(coin.currentPrice)}</p>
        <Badge title={`${coin.priceChangePercentage24h} %`}
               status={coin.priceChangePercentage24h > 0 ? 'success' : 'error'}/>
      </div>
    </Card>
  );
}

export default CoinCard
