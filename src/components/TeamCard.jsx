import React from 'react'

const Teamcard = ({teamData}) => {
  const {name, email, phone} =teamData
  return (
    <div>
      <div className="team-items pt-50">
        <div className="team-content">
          <h4>{name}</h4>
          <h6>{email}</h6>
          <span>{phone}</span>
        </div>
      </div>
    </div>
  )
}

export default Teamcard
