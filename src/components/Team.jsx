import React from 'react'
import Teamcard from './Teamcard'

const Team = () => {
    const teams =[
        {
            id: 1,
            name: "Jhon Smith",
            email: "jhonsmith45@gmail.com",
            phone: "234-096-481",
        },
        {
            id: 2,
            name: "Bill Gates",
            email: "billgates98@gmail.com",
            phone: "936-726-061",
        },
        {
            id: 3,
            name: "Elon Musk",
            email: "elonmusk38@gmail.com",
            phone: "734-796-781",
        },
        {
            id: 4,
            name: "Tim Berners Lee",
            email: "timberners99@gmail.com",
            phone: "834-091-881",
        },
        {
            id: 5,
            name: "Brendan Eich",
            email: "brendaneich16@gmail.com",
            phone: "204-016-381",
        },
        {
            id: 6,
            name: "Ada Lovelace",
            email: "adalovelace05@gmail.com",
            phone: "334-496-581",
        },
    ]
  return (
    <section className="team-section pt-120">
          <div className="container">
            <div className="section-header section-center">
              <h3 className="section-title">our team</h3>
              <p>Rapidiously expedite granular imperatives before economically sound web services.<br/> Credibly actualize pandemic strategic themeplatform.</p>
              </div>
              <div className="row g-4">
                {
                    teams?.map(team=>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6" key={team.id}>
                            <Teamcard teamData={team}/>
                        </div>
                    )
                }
              
              
              </div>
            </div>
        </section>
  )
}

export default Team
