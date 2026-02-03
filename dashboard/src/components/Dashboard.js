import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {

  const [holdings, setHoldings] = useState([]);

  const refreshHoldings = async () => {
    try {
      const res = await axios.get("http://localhost:3002/allHoldings");
      setHoldings(res.data);
    } catch (error) {
      console.error("Error fetching holdings:", error);
    }
  };

  return (
    <div className="dashboard-container">

      <GeneralContextProvider refreshHoldings={refreshHoldings}>
        <WatchList />

        <div className="content">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings holdings={holdings} />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>

      </GeneralContextProvider>

    </div>
  );
};

export default Dashboard;
