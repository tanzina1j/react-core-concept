import React from 'react'
import CustomButton from './CustomButton'
import AboutCard from './AboutCard'
const About = () => {
  const abouts =[
    {
      id:1,
      title:"CREATIVE DESIGNS",
      description:"Collaboratively leverage other's an quality bandwidth through covalent theme value. Appropriately coordinate.",
      icon:"https://cdn-icons-png.freepik.com/256/5234/5234827.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming"
    },
    {
      id: 2,
      title:"app development",
      description:"Collaboratively leverage other's an quality bandwidth through covalent theme value. Appropriately coordinate.",
      icon:"https://cdn-icons-png.freepik.com/256/574/574232.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming"
    },
    {
      id: 3,
      title:"web development",
      description:"Collaboratively leverage other's an quality bandwidth through covalent theme value. Appropriately coordinate.",
      icon:"https://cdn-icons-png.freepik.com/256/1069/1069813.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming"
    },
    {
      id: 4,
      title:"programming",
      description:"Collaboratively leverage other's an quality bandwidth through covalent theme value. Appropriately coordinate.",
      icon:"https://cdn-icons-png.freepik.com/256/5698/5698232.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming"
    },
    
  ]
  return (
    <section className="about-section pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="service-left">
                  <h1 className="service-title">about <br/> our the biz</h1>
                  <p>Proactively expedite cost effective andopportunties 
                    through economically sound creative theme for and
                    Enthusiastically maintain effective anifunctionalities 
                    Conveniently are arecaptiualize
                  </p>
                  <div className="service-btn mt-30">
                    <CustomButton buttonClass = "cmn--btn" title = "read more"/>
                  </div> 
                </div>
              </div>
              <div className="col-md-8">
                <div className="row g-4">
                  {
                    abouts?.map(about=>
                      <div className="col-lg-6 col-md-6" key={about.id}>
                        <AboutCard aboutData={about}/>
                      </div>
                    )
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default About
