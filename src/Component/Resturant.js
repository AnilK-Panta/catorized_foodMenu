import React from "react";
// import Menu from "../Api/MenuApi"

function Resturant({ menuData }) {
  // const [menuData, setMenuData] = useState(Menu[0])
  // console.log(props.menuData)

  return (
    <>
      {menuData.map((curElem) => {
        return (
          <>
            <div className="card" key={curElem.id}>
              <div className="card-body">
                <span className="card-number">{curElem.id}</span>
                <span className="card-author">{curElem.Category}</span>
                <div className="card-title">
                  <h1>{curElem.name}</h1>
                </div>
                <div className="card-desc">
                  <p>{curElem.description}</p>
                </div>
              </div>
              <div className="card-divider">
                <div className="card-hr">
                  <hr></hr>
                </div>
                <div className="card-readmore">Read More</div>
              </div>
              <div className="card-image">
                <img src={curElem.image} alt="image"></img>
              </div>
              <div className="card-order">
                <div className="card-order-button">Order</div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Resturant;
