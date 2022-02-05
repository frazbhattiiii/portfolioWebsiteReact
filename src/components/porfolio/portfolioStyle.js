import styled from 'styled-components';
import { motion } from 'framer-motion';
export const PricingSection = styled.div`
	padding: 160px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #101522;
`;
export const priceButton = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	color: #000099;
	outline: none;
	border: 2px solid #fff;
	cursor: pointer;
	overflow: hidden;
	position: relative;

	&:before {
		color:white;
		background: #0000b3;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: white;
	}
`;

export const PricingWrapper = styled.div`
scrollbar-width: none;
scroll-behavior: smooth;
&::-webkit-scrollbar{
	display: none;

}
	display: flex;
	margin-top:5rem;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;


	}
	@media screen and (max-width: 960px) {
		margin-top:2rem;
	}

`;

export const PricingContainer = styled.div`

	display: flex;
	justify-content: center;
	flex-flow: wrap;
	> div {
		margin: 0.7rem;
	}
	scrollbar-width: none;
scroll-behavior: smooth;
&::-webkit-scrollbar{
	display: none;

}
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		
		align-items: center;

		width: 80%;
		> div {
			width: 90%;
		}
	}
`;

export const PricingCard = styled.div`
scrollbar-width: none;
scroll-behavior: smooth;
&::-webkit-scrollbar{
	display: none;

}

	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
	@media (max-width: 768px){
		
		height: 40vh;
		flex-direction: column;
		justify-content: space-between;
}
`;
export const PriceImage = styled(motion.img)`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 200px;
	z-index: 1;
`;
export const PriceImageWrapper = styled(motion.div)`
	display: flex;
	
	justify-content: 'flex-end';
	max-height: 400px;
	justify-content: center;
	// position: relative;
`;
export const PricingCardInfo = styled.div`
	background: #242424;
	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
	width: 250px;
	text-decoration: none;
	border-radius: 4px;
	height: 100%;
	

	display: flex;
	flex-direction: column;
	padding: 24px;
	color: #fff;
	margin-top:-.125rem;
	> button {
		margin-top: auto;

		&:hover {
			color: black;
			// background: white;
			transition: background 0.3s ease;
		}
	}

	@media screen and (max-width: 768px) {
		width: 60%;
		margin-right:1rem;
		margin-left:3rem;
		scrollbar-width: none;
scroll-behavior: smooth;
&::-webkit-scrollbar{
	display: none;

}
		
		&:hover {
			transform: none;
		}
	}

`;

export const PricingCardPlan = styled.h3`
scrollbar-width: none;
scroll-behavior: smooth;
&::-webkit-scrollbar{
	display: none;

}
	margin-bottom: 5px;
	font-size: 1.5rem;
	@media (max-width: 768px){
	font-size:1.25rem;
	margin-top:.25rem;
}
`;

export const PricingCardCost = styled.h4`
	font-size: 1.2rem;
`;

export const PricingCardText = styled.p`

scrollbar-width: none;
scroll-behavior: smooth;
&::-webkit-scrollbar{
	display: none;

}
	font-size: 1.1rem;
	margin: 0.4rem 0 1.3rem;
	color: #a9b3c1;
`;

export const PricingCardFeatures = styled.ul`
	margin: 16px 0 32px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
	margin-bottom: 1rem;
	display: flex;
	font-size: 0.94rem;

	&:before {
		content: '⚪';
		margin-right: 0.4rem;
	}
`;
