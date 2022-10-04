import React from "react";
import "./homepage.scss";
import Navbar from "../Navbar/Navbar";
import Arcade from "../Arcade/Arcade.jsx";
import Inventory from "../Inventory/Inventory.jsx";
import NewInventory from "../NewInventory/NewInventory.jsx";
import TimeSheet from "../TimeSheet/TimeSheet.jsx";
import POS from "../POS/POS.jsx";

export default function HomePage() {
  const componentList = [Arcade, Inventory, NewInventory, TimeSheet, { POS }];

  return (
    <div id="portal">
      <Navbar />
      <div>
        <div className="portal--container"></div>
      </div>
    </div>
  );
}
