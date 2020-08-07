import React, { Component } from 'react';
import './Header.css';
// import logo from '../logo.svg';
import paoilogo from '../assets/images/Gallery/973.png';

class Header extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
				
				<div id="top-bar" className="top-bar">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-8 col-sm-6 col-xs-12 text-left">
						<ul className="top-info">
							<li>
								<p className="info-text company-name">Progressive Associates of India,</p><br/>
								<p><i className="fa fa-map-marker">&nbsp;</i>Plot No. 5, Nandadeep Society,
								Near Janseva Bank, Anand Nagar, 
								Sinhgad Road, Pune - 411051, Maharashtra, India.
								</p>
							</li>
						</ul>
					</div>
					{/* <!--/ Top info end --> */}

					<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 top-social text-right">
						<ul className="unstyled">
							<li>
								<a title="Facebook" href="https://facebbok.com/themefisher.com">
									<span className="social-icon"><i className="fa fa-facebook"></i></span>
								</a>
								<a title="Twitter" href="https://twitter.com/themefisher.com">
									<span className="social-icon"><i className="fa fa-twitter"></i></span>
								</a>
								<a title="Instagram" href="https://instagram.com/themefisher.com">
									<span className="social-icon"><i className="fa fa-instagram"></i></span>
								</a>
								<a title="Linkdin" href="https://github.com/themefisher.com">
									<span className="social-icon"><i className="fa fa-github"></i></span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

      <header id="header" className="header-one">
			<div className="container">
				<div className="row">
					<div className="logo-area clearfix">
						<div className="logo col-xs-12 col-md-3">
							<a href="index.html">
								<img src={paoilogo} />
							</a>
						</div>
						<div className="col-xs-12 col-md-9 header-right">
							<ul className="top-info-box">
								<li>
									<div className="info-box">
										<p className="info-box-title">Call Us</p>
										<p className="info-box-subtitle">+91 94 2086 1212<br/> +91 88 8821 5415.</p>
									</div>
								</li>
								<li>
									<div className="info-box">
										<div className="info-box-content">
											<p className="info-box-title">Email Us</p>
											<p className="info-box-subtitle">ppjparag@gmail.com</p>
										</div>
									</div>
								</li>
								<li className="header-get-a-quote">
									<a className="btn btn-primary" href="contact.html">Get A Quote</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			
			<nav className="site-navigation navigation navdown">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="site-nav-inner pull-left">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>

								<div className="collapse navbar-collapse navbar-responsive-collapse">
									<ul className="nav navbar-nav">
										<li className="dropdown active">
											<a href="#" className="dropdown-toggle" data-toggle="dropdown">Home <i
													className="fa fa-angle-down"></i></a>
											<ul className="dropdown-menu" role="menu">
												<li className="active"><a href="index.html">Home One</a></li>
											</ul>
										</li>

										<li className="dropdown">
											<a href="#" className="dropdown-toggle" data-toggle="dropdown">Company <i
													className="fa fa-angle-down"></i></a>
											<ul className="dropdown-menu" role="menu">
												<li><a href="about.html">About Us</a></li>
											
												
												<li><a href="pricing.html">Pricing</a></li>
											</ul>
										</li>

										<li className="dropdown">
											<a href="#" className="dropdown-toggle" data-toggle="dropdown">Projects <i
													className="fa fa-angle-down"></i></a>
											<ul className="dropdown-menu" role="menu">
												<li><a href="projects.html">Projects All</a></li>
												<li><a href="projects-single.html">Projects single</a></li>
											</ul>
										</li>

										<li className="dropdown">
											<a href="#" className="dropdown-toggle" data-toggle="dropdown">Services <i
													className="fa fa-angle-down"></i></a>
											<ul className="dropdown-menu" role="menu">
												<li><a href="services.html">Services All</a></li>
											</ul>
										</li>
										
										<li className="dropdown">
											<a href="#" className="dropdown-toggle" data-toggle="dropdown">Gallery <i
													className="fa fa-angle-down"></i></a>
											<ul className="dropdown-menu" role="menu">
												<li><a href="news-left-sidebar.html">Images</a></li>
												
											</ul>
										</li>

										<li><a href="contact.html">Contact</a></li>

									</ul>
									{/* <!--/ Nav ul end --> */}
								</div>
								{/* <!--/ Collapse end --> */}

							</div>
							{/* <!-- Site Navbar inner end --> */}

						</div>
						{/* <!--/ Col end --> */}
					</div>
					{/* <!--/ Row end --> */}

					<div className="nav-search">
						<span id="search"><i className="fa fa-search"></i></span>
					</div>
					{/* <!-- Search end --> */}

					<div className="search-block">
						<input type="text" className="form-control" placeholder="Type what you want and enter" />
						<span className="search-close">&times;</span>
					</div>
					{/* <!-- Site search end --> */}
				</div>
				{/* <!--/ Container end --> */}

			</nav>
			{/* <!--/ Navigation end --> */}

			</header>
    </div>
    );
  }
}

export default Header;