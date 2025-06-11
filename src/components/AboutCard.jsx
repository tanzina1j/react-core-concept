import React from 'react'

const AboutCard = ({aboutData}) => {
    const {icon, title, description} = aboutData
  return (
    <div>
        <div className="service-items">
            <div className="icon">
                <img src={icon} alt="icon-image"/>
            </div>
            <div className="icon-content">
                <h5><a href="#">{title}</a></h5>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutCard
