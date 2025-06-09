import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Services from './components/Services'
import CustomButton from './components/CustomButton'

function App() {
  const [count, setCount] = useState(0)

  return (
		<div className='body'>
      <Header/>

			<main>
        <section className="banner-section-one">
					<div className="banner-items">
						<div className="container">
							<div className="row">
								<div className="col-xl-8 col-lg-8 col-md-8">
									<div className="banner-content">
										<h1>complex<br/><span>solutions for your</span> business</h1>
										<h4>best for business theme</h4>
									</div>
									<div className="banner-button mt-30">
                    <CustomButton buttonClass = "cmn--btn" title="read more"/>
                    <CustomButton buttonClass = "cmn--btn-one" title="view services"/>
										{/* <a className="cmn--btn" href="#0">read more</a> */}
										{/* <a className="cmn--btn-one" href="service-single.html">view services</a> */}
									</div>
								</div> 
							</div>
						</div>
					</div>
				</section>

        <section className="service-section-one pt-120 pb-120">
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
                    <a className="cmn--btn" href="#0">read more</a>
                  </div> 
                </div>
              </div>
              <div className="col-md-8">
                <div className="row g-4">
                  <div className="col-lg-6 col-md-6">
                    <div className="service-items">
                      <div className="icon">
                        <img src="https://cdn-icons-png.freepik.com/256/5234/5234827.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming" alt="icon-image"/>
                      </div>
                      <div className="icon-content">
                        <h5><a href="#">CREATIVE DESIGNS</a></h5>
                        <p>Collaboratively leverage other's an quality bandwidth through covalent theme value. Appropriately coordinate.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="service-items">
                      <div className="icon">
                        <img src="https://cdn-icons-png.freepik.com/256/574/574232.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming" alt="icon-image"/>
                      </div>
                      <div className="icon-content">
                        <h5><a href="#">full responsive design</a></h5>
                        <p>Collaboratively leverage other's an quality bandwidth through covalent theme value. Appropriately coordinate.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="service-items">
                      <div className="icon">
                        <img src="https://cdn-icons-png.freepik.com/256/1069/1069813.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming" alt="icon-image"/>
                      </div>
                      <div className="icon-content">
                        <h5><a href="#">24/7 online SUPPORTS</a></h5>
                        <p>Collaboratively leverage other's an quality bandwidth through covalent theme value. Appropriately coordinate.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="service-items">
                      <div className="icon">
                        <img src="https://cdn-icons-png.freepik.com/256/5698/5698232.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming" alt="icon-image"/>
                      </div>
                      <div className="icon-content">
                        <h5><a href="#">Incredibly Flexible</a></h5>
                        <p>Collaboratively leverage other's an quality bandwidth through covalent theme value. Appropriately coordinate.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
		
        <section className="counter-section">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="counter-element d-flex align-items-center justify-content-around mb-30">
                  <div className="counter-items">
                    <span className="count counter-color-1">740</span>
                    <p>CUPS OF COFFEE</p>
                  </div>
                  <div className="counter-items counter-color-3">
                    <span className="count">3</span>
                    <span>k</span>
                    <p>happy customer</p>
                  </div>
                </div>
                <div className="counter-element d-flex align-items-center justify-content-around">
                  <div className="counter-items">
                    <span className="count counter-color-2">130</span>
                    <p>completed work</p>
                  </div>
                  <div className="counter-items">
                    <span className="count counter-color-4">400</span>
                      <p>letters sents</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="style-one">
                  <img src="https://img.freepik.com/free-photo/smiling-business-team-standing-conference-room_1262-1963.jpg?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_items_boosted&w=740"/>
                </div>
              </div>
            </div>
          </div>
        </section>
		
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
                <div className="portfolio-items col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="magnific-img">
                    <img src="https://img.freepik.com/free-photo/young-person-intership_23-2149315589.jpg?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_items_boosted&w=740" alt="portfolio-image"/>
                    
                  </div>
                </div>
                <div className="portfolio-items col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="magnific-img">
                    <img src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-young-confident-businesswoman-glasses-showing-thumbs-up-gesture-hold-laptop-guarantee-best-service-quality_1258-59118.jpg?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_items_boosted&w=740" alt="portfolio-image"/>
                  </div>
                </div>
                <div className="portfolio-items col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="magnific-img">
                    <img src="https://img.freepik.com/free-photo/businessman-black-suit-makes-thumbs-up_114579-15900.jpg?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_items_boosted&w=740" alt="portfolio-image"/>
                  </div>
                </div>
                <div className="portfolio-items col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="magnific-img">
                    <img src="https://img.freepik.com/free-photo/young-person-intership_23-2149315642.jpg?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_items_boosted&w=740" alt="portfolio-image"/>
                  </div>
                </div>
                <div className="portfolio-items col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="magnific-img">
                    <img src="https://img.freepik.com/free-photo/portrait-young-woman-giving-thumbs-up_114579-77766.jpg?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_items_boosted&w=740" alt="portfolio-image"/>
                  </div>
                </div>
                <div className="portfolio-items col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="magnific-img">
                    <img src="https://img.freepik.com/free-photo/cheerful-young-businessman-checking-email-tablet-looking-camera_1262-14164.jpg?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_items_boosted&w=740" alt="portfolio-image"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-button center pt-50">
                <a href="portfolio-single.html" className="cmn--btn">view all portfolio</a>
              </div>
          </div>
        </section>
		
        <Services/>
      </main>
      </div>
  )
}

export default App
