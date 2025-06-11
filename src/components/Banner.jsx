import React from 'react'
import CustomButton from './CustomButton'
import BannerImage from '../assets/banner.jpg'

const Banner = () => {
  return (
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
                            <CustomButton buttonClass = "cmn--btn" title = "read more"/>
                            <CustomButton buttonClass = "cmn--btn-one" title = "view services"/>
						</div>
					</div> 
				</div>
			</div>
		</div>
	</section>
  )
}

export default Banner
