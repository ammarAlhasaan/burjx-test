import {request} from "@/api/axios";
import {CoinDetails, CoinHistoryItem, Pagination} from "@/types";


const coin = {
  all: () => request.get<Pagination<CoinDetails[]>>(`/coin-prices-all?currency=usd&page=1&pageSize=100`),
  list: (page: number = 1, pageSize: number = 10) => request.get<Pagination<CoinDetails[]>>(`/coin-prices-all?currency=usd&page=${page}&pageSize=${pageSize}`),
  details: (id: string, days: string = '30') => request.get<CoinHistoryItem[]>(`/coin-ohlc?productId=${id}&days=${days}`),
};

export default coin;
