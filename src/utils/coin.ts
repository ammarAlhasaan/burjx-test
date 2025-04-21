import {CoinDetails, CoinGroups} from "@/types";


const getGroupedCoins = (coins: CoinDetails[]): CoinGroups => {
  const featured = [...coins]
    .sort((a, b) => a.marketCap - b.marketCap)
    .slice(0, 20);

  const topGainers = [...coins]
    .filter((coin) => coin.priceChangePercentage24h > 0)
    .sort((a, b) => b.priceChangePercentage24h - a.priceChangePercentage24h)
    .slice(0, 20);

  const topLosers = [...coins]
    .filter((coin) => coin.priceChangePercentage24h < 0)
    .sort((a, b) => a.priceChangePercentage24h - b.priceChangePercentage24h)
    .slice(0, 20);

  return {
    featured,
    topGainers,
    topLosers,
  };
}


const getCoinById = (coins: CoinDetails[], productId: number): CoinDetails | undefined => {
  return coins.find(coin => coin.productId === productId)
}

export {
  getGroupedCoins, getCoinById
}
