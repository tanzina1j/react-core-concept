import React from 'react'
import CustomButton from './CustomButton'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
  const portfolios =[
    {
      id:1,
      image:"https://img.freepik.com/free-photo/young-person-intership_23-2149315589.jpg?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_items_boosted&w=740",
    },
    {
      id:2,
      image:"https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-young-confident-businesswoman-glasses-showing-thumbs-up-gesture-hold-laptop-guarantee-best-service-quality_1258-59118.jpg?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_items_boosted&w=740",
    },
    {
      id:3,
      image:"https://img.freepik.com/free-photo/businessman-black-suit-makes-thumbs-up_114579-15900.jpg?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_items_boosted&w=740",
    },
    {
      id:4,
      image:"https://img.freepik.com/free-photo/young-person-intership_23-2149315642.jpg?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_items_boosted&w=740",
    },
    {
      id:5,
      image:"https://img.freepik.com/free-photo/portrait-young-woman-giving-thumbs-up_114579-77766.jpg?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_items_boosted&w=740",
    },
    {
      id:6,
      image:"https://img.freepik.com/free-photo/cheerful-young-businessman-checking-email-tablet-looking-camera_1262-14164.jpg?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_items_boosted&w=740",
    },
  ]
  return (
    <section className="portfolio-section pt-120">
          <div className="container">
            <div className="section-header section-center">
              <h3 className="section-title">OUR PORTFOLIO</h3>
              <p>Rapidiously expedite granular imperatives before economically sound web services.<br/> Credibly actualize pandemic strategic themeplatform.</p>
            </div>
            <div className="button-group filters-button-group">
              <button className="button is-checked" data-filter="*">All</button>
              <button className="button" data-filter=".metal">web design</button>
              <button className="button" data-filter=".transition">development</button>
              <button className="button" data-filter=".alkali">graphic </button>
              <button className="button" data-filter=".body">wordpress</button>
            </div>
            <div className="grid justify-content">
              <div className="row">
                {
                  portfolios?.map(portfolio=>
                    <div className="portfolio-items col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6" key={portfolio.id}>
                      <PortfolioCard portfolioData={portfolio}/>
                    </div>
                  )
                }
                
              </div>
            </div>
            <div className="portfolio-button center pt-50">
                <CustomButton buttonClass = "cmn--btn" title = "view all portfolio"/>
              </div>
          </div>
        </section>
  )
}

export default Portfolio
