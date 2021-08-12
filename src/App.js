// import logo from './logo.svg';
import "./App.css";
import NavBar from "./Component/NavBar";
// import Resturant from "./Component/Resturant"
import Resturant_Card from "./Component/Resturant_Card";
// import menuData from "./Component/NavBar"
import Menu from "./Api/MenuApi";
import { useEffect, useState } from "react";

const uniqueCategory = [
  ...new Set(
    Menu.map((curElement) => {
      return curElement.Category;
    })
  ),
  "All"
];
console.log(uniqueCategory);

function App(props) {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueCategory);

  const filterItem = (Category) => {
    if(Category==="All"){
      // document.getElementsByClassName("btn").className= " active";
  //  element.className = " active";
      // document.getElementsByClassName("btn").classList.add = " active"
      setMenuData(Menu)
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.Category === Category;
    });
    // document.getElementsByClassName("btn").className= " active";

    setMenuData(updatedList);
  };

  // useEffect(() => {
  //   var btns = document.getElementsByClassName("btn");
  //   for (var i = 0; i < btns.length; i++) {
  //     btns[i].addEventListener("click", function () {
  //       var current = document.getElementsByClassName("active");
  //       current[0].className = current[0].className.replace(" active", "");
  //       this.className += " active";
  //     });
  //   }
  // });

  return (
    <div className="App">
      <NavBar filterItem={filterItem} menuList={menuList} />
      <Resturant_Card menuData={menuData} />
    </div>
  );
}

export default App;
