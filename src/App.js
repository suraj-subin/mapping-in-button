import "./App.css";
import React from "react";

export const category = [
  {
    id: 1,
    heading: "Music",
  },
  {
    id: 2,
    heading: "Cable",
  },
  {
    id: 3,
    heading: "Charger",
  },
  {
    id: 4,
    heading: "Power",
  },
  {
    id: 5,
    heading: "Protection",
  },
  {
    id: 6,
    heading: "Holders",
  },
];

function App() {
  const [show, setShow] = React.useState(category);
  // console.log("show is >>", show);
  const filterItem = (categItem) => {
    const updatedItems = category.filter((curElem) => {
      return curElem === categItem;
    });
    setShow(updatedItems);
  };

  return (
    <>
      <div className="Wrapper">
        {/* <h1>[{show}]</h1>    <== Yasari Garda Error aauxa tesaile Ui maa dekhauna lai Aarko mapping lagayako */}
        {category.map((info) => {
          return (
            <>
              <button className="Btn" onClick={() => filterItem(info)}>
                {info.heading}
              </button>
            </>
          );
        })}
         {/* Yo Mapping chai UI maa dekhauna ko lagi ho. */}
        {show.map((sur) => {
          return (
            <div key={sur.id} style={{ marginTop: "25px" }}>
              <h1>{sur.heading}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
