import React from 'react';
import {Route, Routes} from "react-router";
import {MainLayout} from "@/components/layouts";
import Market from "pages/market";
import CoinDetails from "@/pages/coin-details";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route index element={<Market/>}/>
        <Route path="coins">
          <Route path=":id" element={<CoinDetails/>}/>
        </Route>
      </Route>

    </Routes>

  );
}

export default App;
