import React from "react";
import styles from "./coin-info.module.scss"
import cn from "classnames";
import {CoinDetails} from "@/types";


const CoinInfo = ({coin, className}: { coin: CoinDetails, className?: string }) => {

  return (
    <div className={cn(styles.coinInfo, "d-flex", className)}>
      <div className={cn(styles.coinAvatar, "flex-center")}>
        <img src={coin.image} alt={coin.name}/>
      </div>
      <div className={cn("flex-grow-1 ms-2")}>
        <h4 className="text-md text-uppercase">{coin.symbol}</h4>
        <p className="text-xs text-secondary">{coin.name}</p>
      </div>
    </div>
  );
}

export default CoinInfo
