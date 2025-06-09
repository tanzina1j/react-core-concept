import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
    const services = [
        {
            id: 1,
            title: "CREATIVE DESIGNS",
            description: "Collaboratively leverage other's an quality bandwidth through covalent theme value. Appropriately coordinate.",
            icon: "https://cdn-icons-png.freepik.com/256/5234/5234827.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming"
        },
        {
            id: 2,
            title: "app development",
            description: "Collaboratively leverage other's an quality bandwidth through covalent theme value. Appropriately coordinate.",
            icon: "https://cdn-icons-png.freepik.com/256/5234/5234827.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming"
        },
        {
            id: 3,
            title: "Web development",
            description: "Collaboratively leverage other's an quality bandwidth through covalent theme value. Appropriately coordinate.",
            icon: "https://cdn-icons-png.freepik.com/256/5234/5234827.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming"
        },
        {
            id: 4,
            title: "Programming",
            description: "Collaboratively leverage other's an quality bandwidth through covalent theme value. Appropriately coordinate.",
            icon: "https://cdn-icons-png.freepik.com/256/5234/5234827.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming"
        },
        {
            id: 5,
            title: "Online marketing",
            description: "Collaboratively leverage other's an quality bandwidth through covalent theme value. Appropriately coordinate.",
            icon: "https://cdn-icons-png.freepik.com/256/5234/5234827.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming"
        },
        {
            id: 6,
            title: "PPhotography",
            description: "Collaboratively leverage other's an quality bandwidth through covalent theme value. Appropriately coordinate.",
            icon: "https://cdn-icons-png.freepik.com/256/5234/5234827.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming"
        },
    ]
    return (
        <section className="service-section pt-120 pb-120">
            <div className="container">
                <div className="section-header ">
                    <h3 className="section-title">our services</h3>
                    <p>Rapidiously expedite granular imperatives before economically sound web services.<br /> Credibly actualize pandemic strategic themeplatform.</p>
                </div>
                <div className="service-content">
                    <div className="container">
                        <div className="row g-4">
                            {
                                services?.map(service=>
                                    
                            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6" key={service.id}>
                                <ServicesCard serviceData={service}/>
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

export default Services