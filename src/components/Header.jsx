import React from 'react'

const Header = () => {
  return (
    <header className="header-section">
				<div className="container">
					<div className="header-wrapper">
						<div className="logo-menu">
							<a href="index.html" className="logo">
								<img src="https://cdn-icons-png.freepik.com/256/5968/5968507.png?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_incoming" alt="main-logo"/>
							</a>
						</div>
						
						<ul className="main-menu">
							<li className="active">
								<a href="#0">home <i className="fas fa-chevron-down"></i></a>
								<ul className="sub-menu">
								   <li><a href="index.html">Home One</a></li>
								   <li><a href="index-2.html">Home Two</a></li>
								   <li><a href="index-3.html">Home Three</a></li>
								</ul>
							</li>
							<li>
								<a href="#0">About <i className="fas fa-chevron-down"></i></a>
								<ul className="sub-menu">
								   <li><a href="about.html">About Style One</a></li>
								   <li><a href="about-2.html">About Style Two</a></li>
								   <li><a href="about-3.html">About Style Three</a></li>
								</ul>
							</li>
							<li>
								<a href="#0">Services <i className="fas fa-chevron-down"></i></a>
								<ul className="sub-menu">
								   <li><a href="service.html">Services Style One</a></li>
								   <li><a href="service-single.html">Services Single</a></li>
								</ul>
							</li>
							<li>
								<a href="#0">Team <i className="fas fa-chevron-down"></i></a>
								<ul className="sub-menu">
								   <li><a href="team.html">Team Style One</a></li>
								   <li><a href="team-single.html">Team Single</a></li>
								</ul>
							</li>
							<li>
								<a href="#0">Blog <i className="fas fa-chevron-down"></i></a>
								<ul className="sub-menu">
								   <li><a href="blog.html">Blog Style One</a></li>
								   <li><a href="blog-single.html">Blog Single</a></li>
								</ul>
							</li>
							<li>
								<a href="#0">Pages <i className="fas fa-chevron-down"></i></a>
								<ul className="sub-menu">
								   <li><a href="portfolio.html">Portfolio Style One</a></li>
								   <li><a href="portfolio-2.html">Portfolio Style Two</a></li>
								   <li><a href="portfolio-3.html">Portfolio Style Three</a></li>
								   <li><a href="portfolio-single.html">Portfolio Single</a></li>
								   <li><a href="404.html">404</a></li>
								</ul>
							</li>
							<li>
								<a href="#0">Shop <i className="fas fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li><a href="shop-page.html">Shop Page</a></li>
									<li><a href="shop-cart.html">Shop cart</a></li>
									<li><a href="shop-single.html">Shop Single</a></li>
									<li><a href="checkout.html">Checkout</a></li>
									<li><a href="payment-successful.html">Successful</a></li>
								</ul>
							</li>
							<li>
								<a href="contact.html">Contact Us</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
  )
}

export default Header