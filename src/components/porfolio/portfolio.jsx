import { useEffect, useState } from "react";
import PortfolioList
 from "../portfolioList/portfolioList";
import "./portfolio.scss";
import {webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio, featuredPortfolio}
from "../../data";
// import CardActionArea from '@mui/material/CardActionArea';
import { CardActionArea,Card,CardContent,CardMedia,Typography } from "@material-ui/core";
import {
	PricingSection,
	PricingWrapper,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
	PricingCard,
  PriceImageWrapper,
  PriceImage,
	priceButton,
  
} from './portfolioStyle';

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
    <div className="contaner">
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
   
    
      <PricingWrapper>	
					<PricingContainer>
						{data.map((card) => (
							<PricingCard key={card.id}>
								<PricingCardInfo>
                <PriceImageWrapper>
										<PriceImage
											src={card.img}


										/>
                    </PriceImageWrapper>
                  
									<PricingCardPlan>{card.title}</PricingCardPlan>
                  
									
									<PricingCardText>{card.desc}</PricingCardText>

								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
				</PricingWrapper>
 
        </div>
        </div>

  

  );
}