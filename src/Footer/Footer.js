import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
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
  		<footer id="footer" className="footer bg-overlay">
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12 footer-widget footer-about">
                <h3 className="widget-title">About Us</h3>
                <img className="footer-logo" src="973.png" alt="" />
                <p>Progressive Associates of India takes pride in its execution capabilities and has actively participated in a number of projects till date. The Company focuses on achieving international standards in the tasks assigned. Progressive Associates of India is proud that our clients are highly satisfied about quality of 
                  work and services in stipulated time frame.</p>
                <div className="footer-social">
                  <ul>
                    <li><a href="https://facebook.com/themefisher"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/themefisher"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://instagram.com/themefisher"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://github.com/themefisher"><i className="fa fa-github"></i></a></li>
                  </ul>
                </div> 
                {/* Footer social end  */}
                </div>
                {/* Col end  */}

                <div className="col-md-4 col-sm-12 footer-widget">
                  <h3 className="widget-title">Working Hours</h3>
                  <div className="working-hours">
                    We work 7 days a week, every day excluding major holidays. Contact us if you have an emergency, with our
                    Hotline and Contact form.
                    <br/><br/> Monday - Friday: <span className="text-right">10:00 - 16:00 </span>
                    <br/> Saturday: <span className="text-right">12:00 - 15:00</span>
                    <br/> Sunday and holidays: <span className="text-right">09:00 - 12:00</span>
                  </div>
                </div>
              {/*  Col end  */}

              <div className="col-md-4 col-sm-12 footer-widget">
                <h3 className="widget-title">Services</h3>
                <ul className="list-arrow">
                  <li>Pre-Construction</li>
                  <li>General Contracting</li>
                  <li>Construction Management</li>
                  <li>Design and Build</li>
                  <li>Self-Perform Construction</li>
                </ul>
              </div>
              {/* Col end  */}
            </div>
            {/* Row end  */}
          </div>
          {/* Container end  */}
        </div>
        {/* Footer main end  */}

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="copyright-info">
                  <span>Copyright © 2020 a theme by <a href="https://themefisher.com">Progressive Associate of India</a></span>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6">
                <div className="footer-menu">
                  <ul className="nav unstyled">
                    <li><a href="about.html">About</a></li>
                    
                    <li><a href="news-left-sidebar.html">Gallery</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Row end  */}

            <div id="back-to-top" data-spy="affix" data-offset-top="10" className="back-to-top affix">
              <button className="btn btn-primary" title="Back to Top">
                <i className="fa fa-angle-double-up"></i>
              </button>
            </div>

          </div>
          {/* Container end */}
          </div>
          {/* Copyright end */}
	  	</footer>
      {/*  Footer end  */}

      </div>
    );
  }
}

export default Footer;