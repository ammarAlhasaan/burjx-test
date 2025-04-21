import React from "react";
import {Badge, Button, Card, ListItem} from "@/components/ui";
import {CoinDetails} from "@/types";
import {abbreviateNumber, formatPrice} from "@/utils";

import {CoinInfo, Trend} from "@/components/shared";
import cn from "classnames";
import {useNavigate} from "react-router";

import styles from './market.module.scss'

const CoinItem = ({coin}: { coin: CoinDetails }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/coins/${coin.productId}`)}>
      <Card className={cn("p-2 mb-1", styles.allCoinsItem)}>
        <ListItem>
          <ListItem.Cell justify="flex-start">
            <CoinInfo coin={coin}/>
          </ListItem.Cell>
          <ListItem.Cell justify="flex-start">{abbreviateNumber(coin.marketCap)}</ListItem.Cell>
          <ListItem.Cell justify="flex-start">{abbreviateNumber(coin.tradingVolume)}</ListItem.Cell>
          <ListItem.Cell justify="center">
            <div style={{width: 190, height: 50}}>
              <Trend
                key={coin.name}
                data={coin.sparkline}
                status={coin.priceChangePercentage24h > 0 ? 'success' : 'error'}
              />
            </div>
          </ListItem.Cell>
          <ListItem.Cell justify="flex-start">{formatPrice(coin.currentPrice)}</ListItem.Cell>
          <ListItem.Cell justify="flex-start">
            <div>
              <Badge title={`${coin.priceChangePercentage24h} %`} status={coin.priceChangePercentage24h > 0 ? 'success' : 'error'}/>
            </div>
          </ListItem.Cell>
          <ListItem.Cell justify="flex-end">
            <Button>
              Trade
            </Button>
          </ListItem.Cell>
        </ListItem>
      </Card>
    </div>
  );
}

export default CoinItem
