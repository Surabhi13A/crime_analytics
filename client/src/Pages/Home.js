import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="main-page-content">
			<div id="home">
				<div id="particles-js"></div>
				<div className="home-content-main">
					<div className="table-cell">
						<div className="container">
							<div className="row home-row">
								<div className="col-md-12 col-sm-12">
									<div className="home-text wow fadeIn text-center">
										<h1 className="cd-headline clip is-full-width">
											<span
												className="cd-words-wrapper"
												style={{ width: "266px", overflow: "hidden" }}
											>
												<b className="is-hidden">Crime Analytics</b>
												<b className="is-hidden">Crime Prediction</b>
												<b className="is-visible">Crime Mapping</b>
											</span>
										</h1>
										<div className="text-center">
											<ul className="about-social">{/* <li>Data</li> */}</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="parallax" data-velocity="-.1"></div>
				<div className="parallax" data-velocity="-.5" data-fit="525"></div>
			</div>

			{/* <!-- ================================ ABOUT =============================== --> */}

			<div id="about">
				<div className="about-content">
					<div className="love-grid text-center">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="main-title text-center wow fadeIn">
										<h3>What we do</h3>
										<div className="underline1"></div>
										<div className="underline2"></div>
										<p>
											Welcome to our website! We are dedicated to utilizing
											Chicago crime data to map existing crimes, predict future
											incidents, and provide valuable insights into the city's
											criminal activities. We believe that by leveraging
											data-driven approaches, we can contribute to a safer and
											more secure Chicago. Our website aims to contribute to a
											safer city by promoting awareness, understanding, and
											collaboration in the fight against crime. We believe that
											by utilizing data-driven insights, we can empower
											individuals, communities, and law enforcement agencies to
											make informed decisions and take proactive actions to
											create a safer environment for all.
										</p>
									</div>
								</div>
							</div>
							<div className="row love-row wow fadeIn">
								{/* card 1 */}
								<div className="col-md-3 col-sm-6">
									<div className="love-details" data-wow-delay=".1s">
										<i
											className="fa fa-map-marker love-icon"
											aria-hidden="true"
										></i>
										<h3>Interactive Crime Mapping</h3>
										<div className="underline1"></div>
										<div className="underline2"></div>
										<p>
											An interactive map that allows users to explore crime
											incidents across Chicago's neighborhoods
										</p>
									</div>
								</div>
								{/* card 2 */}
								<div className="col-md-3 col-sm-6">
									<div className="love-details" data-wow-delay=".3s">
										<i
											className="fa fa-bar-chart love-icon"
											aria-hidden="true"
										></i>
										<h3>Crime Analytics</h3>
										<div className="underline1"></div>
										<div className="underline2"></div>
										<p>
											Comprehensive crime analytics based on historical data
											through visualizations and statistical analysis
										</p>
									</div>
								</div>
								{/* card 3 */}
								<div className="col-md-3 col-sm-6">
									<div className="love-details" data-wow-delay=".2s">
										<i
											className="fa fa-line-chart love-icon"
											aria-hidden="true"
										></i>
										<h3>Predictive Crime Modeling</h3>
										<div className="underline1"></div>
										<div className="underline2"></div>
										<p>
											Implementation of predictive crime modeling by applying
											advanced algorithms and machine learning techniques to
											historical crime data.{" "}
										</p>
									</div>
								</div>
								{/* card 4 */}
								<div className="col-md-3 col-sm-6">
									<div className="love-details" data-wow-delay=".4s">
										<i
											className="fa fa-file-excel-o love-icon"
											aria-hidden="true"
										></i>
										<h3>Data Sources and Accuracy</h3>
										<div className="underline1"></div>
										<div className="underline2"></div>
										<p>
											The accuracy and reliability of our crime data by sourcing
											it from trusted law enforcement agencies
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="service">
				<div className="resume-content">
					<div className="resume-grid text-center">
						<div className="container">
							<div className="row main-row wow fadeIn">
								<div className="col-md-12">
									<div className="main-title text-center">
										<h3>Services provided</h3>
										<div className="underline1"></div>
										<div className="underline2"></div>
										<p>
											Our website offers an interactive map that displays
											existing crime incidents in Chicago and utilizes
											predictive modeling to forecast future crime occurrences.
											By combining mapping and prediction services, we provide
											users with valuable insights to understand crime patterns,
											allocate resources effectively, and enhance community
											safety.
										</p>
									</div>
								</div>
							</div>
							<div className="row love-row">
								<div className="col-md-6 col-sm-12">
									<div className="exp-details" data-wow-delay=".2s">
										<div className="exp-hover"></div>
										<div className="exp-main">
											<i
												className="fa fa-bar-chart exp-icon"
												aria-hidden="true"
											></i>
											<h3>
												<Link to="/prediction">Crime Prediction</Link>
											</h3>

											<div className="underline1"></div>
											<div className="underline2"></div>
											<p>
												Leveraging advanced algorithms and machine learning
												techniques, we utilize historical crime data to generate
												predictive models. These models forecast the likelihood
												of future crimes
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-sm-12">
									<div className="exp-details" data-wow-delay=".3s">
										<div className="exp-hover"></div>
										<div className="exp-main">
											<i
												className="fa fa-map-marker exp-icon"
												aria-hidden="true"
											></i>
											<h3>
												<Link to="/mapping">Crime Mapping</Link>
											</h3>
											<div className="underline1"></div>
											<div className="underline2"></div>
											<p>
												Using the latest Chicago crime data, we provide an
												interactive map that visually displays crime incidents
												across different neighborhoods. This service helps
												individuals and communities gain a better understanding
												of crime patterns and hotspots in their area.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- ================================ CONTACT ========================== --> */}

			<div id="contact">
				<div className="contact-content">
					<div className="text-grid">
						<div className="text-grid-main">
							<div className="container">
								<div className="row">
									<div className="col-md-12 col-sm-12">
										<div className="main-title text-center wow fadeIn">
											<h3>Contact Us</h3>
											<div className="underline1"></div>
											<div className="underline2"></div>
											<p>
												If you would like to contact us regarding the crime
												prediction analysis website, we are here to assist you.
												Please feel free to reach out to us using the following
												contact information:
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="contact-grid">
						<div className="contact-form-details wow fadeIn">
							<div className="container">
								<div className="row contact-info-row text-center wow fadeIn">
									<div className="col-md-6 col-sm-12 contact-colamn">
										<div className="contact-col-info" data-wow-delay=".2s">
											<i
												className="fa fa-map-marker contact-icon"
												aria-hidden="true"
											></i>
											<h3>Address</h3>
											<p>Mysore, Karnataka, India</p>
										</div>
									</div>
									<div className="col-md-6 col-sm-12 contact-colamn">
										<div className="contact-col-info" data-wow-delay=".4s">
											<i
												className="fa fa-envelope contact-icon"
												aria-hidden="true"
											></i>
											<h3>Email</h3>
											<a
												href="contactus.mail@gmail.com"
												style={{
													color: "black",
													textDecoration: "none",
													fontSize: "17px",
												}}
											>
												contactus.mail@gmail.com
											</a>
										</div>
									</div>
								</div>
							</div>
							{/* <div class="container-fluid map-col">
								<div class="col-md-12 col-sm-12 map-col">
									<div class="google-maps">
										<div class="map-wrap">
											<iframe
												title="google-maps"
												src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5630603985!2d88.0495328251319!3d22.675752087592436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1653845709428!5m2!1sen!2sin"
												width="100%"
												height="450"
												style={{ border: "0" }}
												allowFullScreen=""
												loading="lazy"
												referrerPolicy="no-referrer-when-downgrade"
											></iframe>
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
