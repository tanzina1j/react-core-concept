import React from 'react'

const PortfolioCard = ({portfolioData}) => {
    const {image} = portfolioData
  return (
    <div>
        <div className="magnific-img">
            <img src={image} alt="portfolio-image"/>     
         </div>
    </div>
  )
}

export default PortfolioCard
