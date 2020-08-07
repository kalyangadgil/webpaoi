import React, { Component } from 'react';
// import React from 'react';
import './home.css';
import Header from '../Header'
import Footer from '../Footer'
import img1 from '../assets/images/icon-image/service-icon1.png'
import img2 from '../assets/images/icon-image/service-icon2.png'
import img3 from '../assets/images/icon-image/service-icon3.png'
import img4 from '../assets/images/services/service-center.jpg'
import img5 from '../assets/images/icon-image/service-icon4.png'
import img6 from '../assets/images/icon-image/service-icon5.png'
import img7 from '../assets/images/icon-image/service-icon6.png'
import post1 from '../assets/images/news/news3.jpg'
import post2 from '../assets/images/news/news2.jpg'
import post3 from '../assets/images/news/news1.jpg'
import fact1 from '../assets/images/icon-image/fact1.png'
import fact2 from '../assets/images/icon-image/fact2.png'
import fact3 from '../assets/images/icon-image/fact3.png'
import fact4 from '../assets/images/icon-image/fact4.png'
import slide1 from '../assets/images/slider-main/bg2.jpg'

class Home extends Component {
  render() {
    return(
      <div>
        <Header />

        {/* Carousel  */}
		<div id="main-slide" className="carousel slide" data-ride="carousel">

			 {/* Indicators */}
			<ol className="carousel-indicators visible-lg visible-md">
				<li data-target="#main-slide" data-slide-to="0" className="active"></li>
				<li data-target="#main-slide" data-slide-to="1"></li>
				<li data-target="#main-slide" data-slide-to="2"></li>
			</ol>
			{/* Indicators end */}

		 {/* Carousel inner  */}
			<div className="carousel-inner">

				<div className="item active" style={{"backgroundImage":`url(${slide1})`}}>
					<div className="slider-content">
						<div className="col-md-12 text-center">
							<h2 className="slide-title animated4">7 Years of excellence in</h2>
							<h3 className="slide-sub-title animated5">Construction Industry</h3>
							<p>
								<a href="services.html" className="slider btn btn-primary">Our Services</a>
								<a href="contact.html" className="slider btn btn-primary border">Contact Now</a>
							</p>
						</div>
					</div>
				</div>
				 {/* Carousel item 1 end  */}

				{/* <div className="item" style={{"backgroundImage":"url()"}}>
					<div className="slider-content text-left">
						<div className="col-md-12">
							<h2 className="slide-title-box animated2">World class Service</h2>
							<h3 className="slide-title animated3">When Service Matters</h3>
							<h3 className="slide-sub-title animated3">Your Choice is Simple</h3>
							<p className="animated3">
								<a href="services.html" className="slider btn btn-primary border">Our Services</a>
							</p>
						</div>
					</div>
				</div> */}
				{/* Carousel item 2 end  */}

				{/* <div className="item" style={{"backgroundImage":"url(src/assets/images/slider-main/bg3.jpg)"}}>
					<div className="slider-content text-right">
						<div className="col-md-12">
							<h2 className="slide-title animated6">Meet Our Engineers</h2>
							<h3 className="slide-sub-title animated7">We believe sustainability</h3>
							<p className="slider-description lead animated7">We will deal with your failure that determines how you
								achieve success.</p>
							<p>
								<a href="contact.html" className="slider btn btn-primary">Get Free Quote</a>
								<a href="about.html" className="slider btn btn-primary border">Learn More</a>
							</p>
						</div>
					</div>
				</div> */}
				 {/* Carousel item 3 end  */}

			</div>
       {/* Carousel inner end */}

			 {/* Controllers  */}
			<a className="left carousel-control" href="#main-slide" data-slide="prev">
				<span><i className="fa fa-angle-left"></i></span>
			</a>
			<a className="right carousel-control" href="#main-slide" data-slide="next">
				<span><i className="fa fa-angle-right"></i></span>
			</a>
		</div>
		{/* Carousel end  */}

    <section className="call-to-action-box no-padding">
			<div className="container">
				<div className="action-style-box">
					<div className="row">
						<div className="col-md-10">
							<div className="call-to-action-text">
								<h3 className="action-title">We understand your needs on construction</h3>
							</div>
						</div> 
            {/* Col end */}
					</div>
           {/* row end  */}
				</div>
         {/* Action style box */}
			</div>
       {/* Container end */}
		</section>
     {/* Action end */}

     <section id="ts-features" className="ts-features">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-xs-12">
						<div className="ts-intro">
							<h2 className="into-title">About Us</h2>
							<h3 className="into-sub-title">We deliver landmark projects</h3>
							<p>Progressive Associates of India takes pride in its execution capabilities and has actively participated in a number of projects till date. The Company focuses on achieving international standards in the tasks assigned. Progressive Associates of India is proud that our clients are highly satisfied 
								about quality of work and services in stipulated time frame.</p>
						</div>
            {/* <!-- Intro box end --> */}

						<div className="gap-20"></div>

						<div className="row">
							<div className="col-md-6">
								<div className="ts-service-box">
									<span className="ts-service-icon">
										<i className="fa fa-trophy"></i>
									</span>
									<div className="ts-service-box-content">
										<h3 className="service-box-title">We've Repution for Excellence</h3>
									</div>
								</div>
                {/* <!-- Service 1 end --> */}
							</div>
              {/* <!-- col end --> */}

							<div className="col-md-6">
								<div className="ts-service-box">
									<span className="ts-service-icon">
										<i className="fa fa-sliders"></i>
									</span>
									<div className="ts-service-box-content">
										<h3 className="service-box-title">We Build Partnerships</h3>
									</div>
								</div>
                {/* <!-- Service 2 end --> */}
							</div>
              {/* <!-- col end --> */}
						</div>
            {/* <!-- Content row 1 end --> */}

						<div className="row">
							<div className="col-md-6">
								<div className="ts-service-box">
									<span className="ts-service-icon">
										<i className="fa fa-thumbs-up"></i>
									</span>
									<div className="ts-service-box-content">
										<h3 className="service-box-title">Guided by Commitment</h3>
									</div>
								</div>
                {/* <!-- Service 1 end --> */}
							</div>
              {/* <!-- col end --> */}

							<div className="col-md-6">
								<div className="ts-service-box">
									<span className="ts-service-icon">
										<i className="fa fa-users"></i>
									</span>
									<div className="ts-service-box-content">
										<h3 className="service-box-title">A Team of Professionals</h3>
									</div>
								</div> 
                {/* Service 2 end  */}
							</div>
              {/* col end  */}
						</div>
             {/* Content row 1 end  */}
					</div>
           {/* Col end */}

					<div className="col-md-6 col-xs-12">
						<h3 className="into-sub-title">Our Values</h3>
						<p></p>
						<div className="panel-group" id="accordion">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Safety</a>
									</h4>
								</div>
								
							</div>
							 {/* Panel 1 end */}

							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseTwo"> Customer
											Service</a>
									</h4>
								</div>
								
							</div>
							{/* Panel 2 end */}


							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseThree">
											Integrity</a>
									</h4>
								</div>
								
							</div>
							 {/* Panel 3 end */}

						</div>
						{/* Accordion end  */}

					</div>
           {/* Col end  */}
				</div>
         {/* Row end */}
			</div>
       {/* Container end */}
		</section>
     {/* Feature are end  */}

     <section id="facts" className="facts-area dark-bg">
			<div className="container">
				<div className="row">
					<div className="facts-wrapper">
						<div className="col-sm-3 ts-facts">
							<div className="ts-facts-img">
								<img src={fact1} alt="" />
							</div>
							<div className="ts-facts-content">
								<h2 className="ts-facts-num"><span className="counterUp" data-count="1789">50+</span></h2>
								<h3 className="ts-facts-title">Total Projects</h3>
							</div>
						</div>
            {/* <!-- Col end --> */}

						<div className="col-sm-3 ts-facts">
							<div className="ts-facts-img">
								<img src={fact2} alt="" />
							</div>
							<div className="ts-facts-content">
								<h2 className="ts-facts-num"><span className="counterUp" data-count="647">50+</span></h2>
								<h3 className="ts-facts-title">Staff Members</h3>
							</div>
						</div>
            {/* <!-- Col end --> */}

						<div className="col-sm-3 ts-facts">
							<div className="ts-facts-img">
								<img src={fact3} alt="" />
							</div>
							<div className="ts-facts-content">
								<h2 className="ts-facts-num"><span className="counterUp" data-count="4000">4000</span></h2>
								<h3 className="ts-facts-title">Hours of Work</h3>
							</div>
						</div>
            {/* <!-- Col end --> */}

						<div className="col-sm-3 ts-facts">
							<div className="ts-facts-img">
								<img src={fact4} alt="" />
							</div>
							<div className="ts-facts-content">
								<h2 className="ts-facts-num"><span className="counterUp" data-count="44">2+</span></h2>
								<h3 className="ts-facts-title">Countries Experience</h3>
							</div>
						</div>
            {/* <!-- Col end --> */}

					</div>
           {/* <!-- Facts end --> */}
				</div>
				{/* <!--/ Content row end --> */}
			</div>
			{/* <!--/ Container end --> */}
		</section>
    {/* <!-- Facts end --> */}

    <section id="ts-service-area" className="ts-service-area">
			<div className="container">
				<div className="row text-center">
					<h2 className="section-title">We Are Specialists In</h2>
					<h3 className="section-sub-title">What We Do</h3>
				</div>
				{/* <!--/ Title row end --> */}

				<div className="row">
					<div className="col-md-4">
						<div className="ts-service-box">
							<div className="ts-service-box-img pull-left">
								<img src={img1} alt="" />
							</div>
							<div className="ts-service-box-info">
								<h3 className="service-box-title"><a href="#">Commercial and Residential Projects</a></h3>
								<p>Good buildings come from good people, and all problem s are solved by good design.</p>
							</div>
						</div>
            {/* <!-- Service 1 end --> */}

						<div className="ts-service-box">
							<div className="ts-service-box-img pull-left">
								<img src={img2} alt="" />
							</div>
							<div className="ts-service-box-info">
								<h3 className="service-box-title"><a href="#">Gazebo Projects</a></h3>
								<p>You can dream, create, design, and build the most wonderful place in the build.

								</p>
							</div>
						</div>
            {/* <!-- Service 2 end --> */}

						<div className="ts-service-box">
							<div className="ts-service-box-img pull-left">
								<img src={img3} alt="" />
							</div>
							<div className="ts-service-box-info">
								<h3 className="service-box-title"><a href="#">Interior Design</a></h3>
								<p>Interior design is making the best possible use of the available space.</p>
							</div>
						</div>
            {/* <!-- Service 3 end --> */}
					</div>
          {/* <!-- Col end --> */}

					<div className="col-md-4 text-center">
						<img className="service-center-img img-responsive" src={img4} alt="" />
					</div>
          {/* <!-- Col end --> */}

					<div className="col-md-4">
						<div className="ts-service-box">
							<div className="ts-service-box-img pull-left">
								<img src={img5} alt="" />
							</div>
							<div className="ts-service-box-info">
								<h3 className="service-box-title"><a href="#">Row House Project</a></h3>
								<p>Architecture should speak of its time and place, yearn for timelessness.</p>
							</div>
						</div>
            {/* <!-- Service 4 end --> */}

						<div className="ts-service-box">
							<div className="ts-service-box-img pull-left">
								<img src={img6} alt="" />
							</div>
							<div className="ts-service-box-info">
								<h3 className="service-box-title"><a href="#">Industrial Sheds project</a></h3>
								<p>Get the best deal !!! Start your project Today....</p>
							</div>
						</div>
            {/* <!-- Service 5 end --> */}

						<div className="ts-service-box">
							<div className="ts-service-box-img pull-left">
								<img src={img7} alt="" />
							</div>
							<div className="ts-service-box-info">
								<h3 className="service-box-title"><a href="#">Safety Management and Customer need</a></h3>
								<p>It's people working together to create a safe work environment.<br/> We don't want to push our ideas on to 
								customers, we simply want to make what they want.</p>
							</div>
						</div>
            {/* <!-- Service 6 end --> */}
					</div>
          {/* <!-- Col end --> */}
				</div>
        {/* <!-- Content row end --> */}

			</div>
			{/* <!--/ Container end --> */}
		</section>
    {/* <!-- Service end --> */}

		<section id="project-area" className="project-area solid-bg">
			<div className="container">
				<div className="row text-center">
					<h2 className="section-title">Work of Excellence</h2>
					<h3 className="section-sub-title">Recent Projects</h3>
				</div>
				{/* <!--/ Title row end --> */}

				<div className="row">
					<div className="isotope-nav" data-isotope-nav="isotope">
						<ul>
							<li><a href="#" className="active" data-filter="*">Show All</a></li>
							<li><a href="#" data-filter=".commercial">Commercial</a></li>
							<li><a href="#" data-filter=".education">Education</a></li>
							<li><a href="#" data-filter=".government">Government</a></li>
							<li><a href="#" data-filter=".infrastructure">Infrastructure</a></li>
							<li><a href="#" data-filter=".residential">Residential</a></li>
							<li><a href="#" data-filter=".healthcare">Healthcare</a></li>
							
						</ul>
					</div>
					{/* <!-- Isotope filter end --> */}


					<div id="isotope" className="isotope">
						<div className="col-md-4 col-sm-6 col-xs-12 commercial isotope-item">
							<div className="isotope-img-container">
								<a className="gallery-popup" href="../assets/images/projects/project1.jpg">
									<img className="img-responsive" src="../assets/images/projects/project1.jpg" alt=""/>
									<span className="gallery-icon"><i className="fa fa-plus"></i></span>
								</a>
								<div className="project-item-info">
									<div className="project-item-info-content">
										<h3 className="project-item-title">
											<a href="projects-single.html">Capital Teltway Building</a>
										</h3>
										<p className="project-cat">Commercial, Interiors</p>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Isotope item 1 end --> */}

						<div className="col-md-4 col-sm-6 col-xs-12 healthcare isotope-item">
							<div className="isotope-img-container">
								<a className="gallery-popup" href="images/projects/project2.jpg">
									<img className="img-responsive" src="images/projects/project2.jpg" alt=""/>
									<span className="gallery-icon"><i className="fa fa-plus"></i></span>
								</a>
								<div className="project-item-info">
									<div className="project-item-info-content">
										<h3 className="project-item-title">
											<a href="projects-single.html">Ghum Touch Hospital</a>
										</h3>
										<p className="project-cat">Healthcare</p>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Isotope item 2 end --> */}

						<div className="col-md-4 col-sm-6 col-xs-12 government isotope-item">
							<div className="isotope-img-container">
								<a className="gallery-popup" href="images/projects/project3.jpg">
									<img className="img-responsive" src="images/projects/project3.jpg" alt=""/>
									<span className="gallery-icon"><i className="fa fa-plus"></i></span>
								</a>
								<div className="project-item-info">
									<div className="project-item-info-content">
										<h3 className="project-item-title">
											<a href="projects-single.html">TNT East Facility</a>
										</h3>
										<p className="project-cat">Government</p>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Isotope item 3 end --> */}

						<div className="col-md-4 col-sm-6 col-xs-12 education isotope-item">
							<div className="isotope-img-container">
								<a className="gallery-popup" href="images/projects/project4.jpg">
									<img className="img-responsive" src="images/projects/project4.jpg" alt=""/>
									<span className="gallery-icon"><i className="fa fa-plus"></i></span>
								</a>
								<div className="project-item-info">
									<div className="project-item-info-content">
										<h3 className="project-item-title">
											<a href="projects-single.html">Narriot Headquarters</a>
										</h3>
										<p className="project-cat">Infrastructure</p>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Isotope item 4 end --> */}

						<div className="col-md-4 col-sm-6 col-xs-12 infrastructure isotope-item">
							<div className="isotope-img-container">
								<a className="gallery-popup" href="images/projects/project5.jpg">
									<img className="img-responsive" src="images/projects/project5.jpg" alt=""/>
									<span className="gallery-icon"><i className="fa fa-plus"></i></span>
								</a>
								<div className="project-item-info">
									<div className="project-item-info-content">
										<h3 className="project-item-title">
											<a href="projects-single.html">Kalas Metrorail</a>
										</h3>
										<p className="project-cat">Infrastructure</p>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Isotope item 5 end --> */}

						<div className="col-md-4 col-sm-6 col-xs-12 residential isotope-item">
							<div className="isotope-img-container">
								<a className="gallery-popup" href="images/projects/project6.jpg">
									<img className="img-responsive" src="images/projects/project6.jpg" alt=""/>
									<span className="gallery-icon"><i className="fa fa-plus"></i></span>
								</a>
								<div className="project-item-info">
									<div className="project-item-info-content">
										<h3 className="project-item-title">
											<a href="projects-single.html">Ancraft Avenue House</a>
										</h3>
										<p className="project-cat">Residential</p>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Isotope item 6 end --> */}
					</div>
					{/* <!-- Isotop end --> */}

					<div className="general-btn text-center">
						<a className="btn btn-primary" href="projects.html">View All Projects</a>
					</div>

				</div>
				{/* <!-- Content row end --> */}
			</div>
			{/* <!--/ Container end --> */}
		</section>
		{/* <!-- Project area end --> */}

		<section className="subscribe no-padding">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-12 col-xs-12">
						<div className="subscribe-call-to-acton">
							<h3>Can We Help?</h3>
							<h4>+91 94 2086 1212<br/> +91 88 8821 5415.</h4>
						</div>
					</div>
					{/* <!-- Col end --> */}
				</div>
				{/* <!-- Content row end --> */}
			</div>
			{/* <!--/ Container end --> */}
		</section>
		{/* <!--/ News end --> */}

		<section id="news" className="news">
			<div className="container">
				<div className="row text-center">
					<h2 className="section-title">Work of Excellence</h2>
					<h3 className="section-sub-title">Recent Projects</h3>
				</div>
				{/* <!--/ Title row end --> */}

				<div className="row">
					<div className="col-md-4 col-xs-12">
						<div className="latest-post">
							<div className="latest-post-media">
								<a href="news-single.html" className="latest-post-img">
									<img className="img-responsive" src={post3} alt="img"/>
								</a>
							</div>
							<div className="post-body">
								<h4 className="post-title">
									<a href="news-single.html">We Just Completes $17.6 million Medical Clinic in Mid-Missouri</a>
								</h4>
								<div className="latest-post-meta">
									<span className="post-item-date">
										<i className="fa fa-clock-o"></i> July 20, 2017
									</span>
								</div>
							</div>
						</div>
						{/* <!-- Latest post end --> */}
					</div>
					{/* <!-- 1st post col end --> */}

					<div className="col-md-4 col-xs-12">
						<div className="latest-post">
							<div className="latest-post-media">
								<a href="news-single.html" className="latest-post-img">
									<img className="img-responsive" src={post2} alt="img"/>
								</a>
							</div>
							<div className="post-body">
								<h4 className="post-title">
									<a href="news-single.html">Thandler Airport Water Reclamation Facility Expansion Project Named</a>
								</h4>
								<div className="latest-post-meta">
									<span className="post-item-date">
										<i className="fa fa-clock-o"></i> June 17, 2017
									</span>
								</div>
							</div>
						</div>
						{/* <!-- Latest post end --> */}
					</div>
					{/* <!-- 2nd post col end --> */}

					<div className="col-md-4 col-xs-12">
						<div className="latest-post">
							<div className="latest-post-media">
								<a href="news-single.html" className="latest-post-img">
									<img className="img-responsive" src={post1} alt="img"/>
								</a>
							</div>
							<div className="post-body">
								<h4 className="post-title">
									<a href="news-single.html">Silicon Bench and Cornike Begin Construction Solar Facilities</a>
								</h4>
								<div className="latest-post-meta">
									<span className="post-item-date">
										<i className="fa fa-clock-o"></i> Aug 13, 2017
									</span>
								</div>
							</div>
						</div>
						{/* <!-- Latest post end --> */}
					</div>
					{/* <!-- 3rd post col end --> */}
				</div>
				{/* <!--/ Content row end --> */}

				<div className="general-btn text-center">
					<a className="btn btn-primary" href="news-left-sidebar.html">See All Posts</a>
				</div>

			</div>
			{/* <!--/ Container end --> */}
		</section>
		{/* <!--/ News end --> */}

        <Footer />
      </div>
    );
 }
}

export default Home;
