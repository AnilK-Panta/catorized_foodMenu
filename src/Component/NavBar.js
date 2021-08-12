import React, { useState } from "react";
import Menu from "../Api/MenuApi";

function NavBar({ filterItem, menuList }) {
  // const [menuData, setMenuData] = useState(Menu)

  // const filterItem=(Category)=>{
  //     const updatedList = Menu.filter((curElem)=>{
  //         return curElem.Category===Category;

  //     })
  //     setMenuData(updatedList)
  //     console.log(menuData)
  // }

  return (
    <div>
      <div className="Navbar">
        <div className="NavbarButton">
          {menuList.map((curElem) => {
            return (
              <>
                <p className="btn" onClick={() => filterItem(curElem)}>
                  {curElem}
                </p>
              </>
            );
          })}
          {/* <p className="btn" onClick={() => filterItem("Lunch")}>
            Lunch
          </p>
          <p className="btn" onClick={() => filterItem("Breakfast")}>
            Breakfast
          </p>
          <p className="btn" onClick={() => filterItem("Dinner")}>
            Dinner
          </p> */}
          {/* <p className="btn active" onClick={() => filterItem("all")}>
                  All
                </p> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
