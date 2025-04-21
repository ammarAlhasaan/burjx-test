import React, { useState, useEffect } from "react";
import styles from './coin-details.module.scss'
import cn from "classnames";
import { Badge, Card, Input, List, ListItem, Modal } from "@/components/ui";
import { CoinDetails } from "@/types";
import { CoinInfo } from "@/components/shared";

import arrowDown from '@/assets/images/icons/arrow-down.svg'
import iconSearch from '@/assets/images/icons/icon-search.svg'
import { formatPrice } from "@/utils";
import Fuse from 'fuse.js';

const SelectedCoin = ({ coin }: { coin?: CoinDetails }) => {
  return (
    <div className={cn(styles.selectCoin, "d-flex")}>
      {coin?.image && <div className={cn(styles.coinAvatar, "flex-center")}>
        <img src={coin?.image} alt={coin?.name} />
      </div>}
      <div className={cn("flex-grow-1 ms-2 align-items-center d-flex")}>
        {coin?.name ? <p className="text-lg m-0">
          {coin?.name}
          <span className="text-md text-uppercase"> ({coin?.symbol})</span>
        </p> : <p className="text-lg m-0">Select Coin</p>}
      </div>
      <div className={cn("flex-center")}>
        <img src={arrowDown} alt="arrowDown" />
      </div>
    </div>
  )
}

const CoinValue = ({ coin, className }: { coin: CoinDetails, className?: string }) => {

  return (
    <div className={cn(styles.coinInfo, "d-flex", className)}>
      <div className={cn("flex-grow-1 ms-2")}>
        <p className="text-md mt-0 mb-2">{formatPrice(coin?.currentPrice || 0)}</p>
        <Badge
          title={`${coin.priceChangePercentage24h} %`}
          status={coin.priceChangePercentage24h > 0 ? 'success' : 'error'} />
      </div>
    </div>
  );
}

const CoinSelect = ({ allCoins, selectedCoin, onSelect }: {
  allCoins: CoinDetails[],
  selectedCoin?: CoinDetails,
  onSelect?: (item: CoinDetails) => void
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Local state for filtered coins
  const [filteredProducts, setFilteredProducts] = useState<CoinDetails[]>(allCoins);

  // State to store search term
  const [searchTerm, setSearchTerm] = useState('');

  // Fuse.js instance for search
  const [fuse, setFuse] = useState<Fuse<CoinDetails> | null>(null);

  useEffect(() => {
    if (allCoins.length > 0) {
      const fuseInstance = new Fuse(allCoins, {
        keys: ['name', 'symbol'],
        threshold: 0.3,
      });
      setFuse(fuseInstance); // Set the Fuse instance
      setFilteredProducts(allCoins); // Set the initial list of all coins
    }
  }, [allCoins]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);

    if (fuse) {
      if (term.trim()) {
        const results = fuse.search(term).map(result => result.item);
        setFilteredProducts(results);
      } else {
        setFilteredProducts(allCoins); // Reset to the original array if no search term
      }
    }
  };

  return (
    <div>
      <Card onClick={() => setIsOpen(true)} className={cn("p-0 px-2", styles.selectButton)}>
        <SelectedCoin coin={selectedCoin} />
      </Card>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Search crypto"
      >
        <div className="mb-3">
          <Input
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search"
            icon={<img src={iconSearch} alt="search" />} />
        </div>

        <p className="text-xs text-secondary">All Coins</p>
        <List
          data={filteredProducts}
          renderItem={(coin) => (
            <Card className={cn("p-1 mb-1", styles.coinItem)} onClick={() => {
              onSelect?.(coin);
              setIsOpen(false);
            }}>
              <ListItem>
                <ListItem.Cell justify="flex-start">
                  <CoinInfo coin={coin} />
                </ListItem.Cell>
                <ListItem.Cell justify="flex-end">
                  <CoinValue coin={coin} />
                </ListItem.Cell>
              </ListItem>
            </Card>
          )}
        />
      </Modal>
    </div>
  )
}

export default CoinSelect;
