import React from 'react'


const ServicesCard = ({serviceData}) => {
    const {title, icon, description} = serviceData
  return (
    <div>
        <div className="service-items">
            <div className="icon">
                <img src={icon} alt="icon-image"/>
            </div>
            <div className="icon-content">
                <h5><a href="service-single.html">{title}</a></h5>
                <p>{description}</p>
            </div>
        </div>
        
    </div>
  )
}

export default ServicesCard


