import React, { useState } from "react";
import Resturant from "./Resturant";
// import Menu from "../Api/MenuApi"


function Resturant_Card(props) {
    // const [menuData, setMenuData] = useState(Menu)
    // console.log(menuData)
  return (
    <>
      <div className="resturant-card-body">
        <div className="card-body-wrap">
          <Resturant menuData={props.menuData} />
          {/* <Resturant />
          <Resturant />
          <Resturant />
          <Resturant />
          <Resturant />
          <Resturant /> */}
        </div>
      </div>
    </>
  );
}

export default Resturant_Card;
