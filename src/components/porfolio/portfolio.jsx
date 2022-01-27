import { useEffect, useState } from "react";
import PortfolioList
 from "../portfolioList/portfolioList";
import "./portfolio.scss";
import {webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio, featuredPortfolio}
from "../../data"


export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "UI",
      title: "Interactive UI",
    },
    {
      id: "programmer",
      title: "C++ Python Java",
    },
 
  ];
 useEffect(()=>{
  switch(selected){
    case "featured":
      setData(featuredPortfolio)
      break;
    case "UI":
      setData(designPortfolio)
      break;
    case "web":
      setData(webPortfolio)
      break;
    case "programmer":
      setData(contentPortfolio)
      break;

  }
 },[selected])
  return (
    <div className="portfolio" id="Portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
           
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
          ))}

      </div>
    </div>
  );
}