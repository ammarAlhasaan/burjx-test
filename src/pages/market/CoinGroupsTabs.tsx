import React, {useState} from "react";

import {CoinDetails, CoinGroups} from "@/types";
import {CoinCard} from "@/components/shared";
import {HorizontalList, Tab} from "@/components/ui";
import {useNavigate} from "react-router";

type Groups = 'featured' | 'topGainers' | 'topLosers'
const CoinGroupsTabs = ({groups}: { groups?: CoinGroups }) => {
  const [selectedTab, setSelectedTab] = useState<Groups>('featured')
  const navigate = useNavigate();

  return (
    <div>
      <Tab
        className="mb-3"
        tabs={[
          {tabKey: 'featured', label: '🔥 Featured'},
          {tabKey: 'topGainers', label: '🚀 Top Gainers'},
          {tabKey: 'topLosers', label: '🚨 Top Losers'},
        ]}
        selectedTab={selectedTab}
        onTabChange={(tabKey) => setSelectedTab(tabKey as any)}
      />
      <HorizontalList<CoinDetails>
        data={groups?.[selectedTab] || []}
        renderItem={(item) => <div onClick={() => navigate(`/coins/${item.productId}`)}>
          <CoinCard key={item.id}
                    coin={item}/>
        </div>}
      />
    </div>
  );
}

export default CoinGroupsTabs
