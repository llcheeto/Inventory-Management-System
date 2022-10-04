import React from "react";
import "./homepage.scss";
import Navbar from "../Navbar/Navbar";
// import Arcade from "../Arcade/Arcade.jsx";
// import Inventory from "../Inventory/Inventory.jsx";
// import NewInventory from "../NewInventory/NewInventory.jsx";
// import TimeSheet from "../TimeSheet/TimeSheet.jsx";
// import POS from "../POS/POS.jsx";

export default function HomePage() {
  const portalPages = [
    {
      name: "POS",
      route: "/POS",
    },
    {
      name: "Arcade",
      route: "/Arcade",
    },
    {
      name: "Inventory",
      route: "/Inventory",
    },
    {
      name: "+Inventory",
      route: "/NewInventory",
    },
    {
      name: "TimeSheet",
      route: "/TimeSheet",
    },
  ];

  return (
    <div id="portal">
      <Navbar />
      <div>
        <div className="portal--container">
          {portalPages.map((page) => (
            <a href={page.route}>
              <div className="portal--card">
                <h1>{page.name}</h1>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
