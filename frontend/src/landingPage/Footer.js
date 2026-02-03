import React from "react";

const Footer = () => {
  return (
    
      <div className="container-fluid px-5 py-5  " style={{backgroundColor:"#FBFBFB"}}>

        {/* ===== SINGLE ROW ===== */}
        <div className="row gy-4">

          {/* Logo */}
          <div className="col-lg-2 col-md-6">
            <p className="text-muted small mb-0">
              © 2010 – 2025, Zerodha Broking Ltd.<br />
              All rights reserved.
            </p>
            <div className="d-flex gap-3 mt-3 footer-social">
              <a href="#" aria-label="X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div className="d-flex gap-3 mt-3 footer-social">
              <a href="#" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#" aria-label="Telegram">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>


          </div>

          {/* Account */}
          <div className="col-lg-2 col-md-6">
            <ul className="list-unstyled footer-links">
              <li><strong>Account</strong></li>
              <li><a href="#">Open demat account</a></li>
              <li><a href="#">Minor demat account</a></li>
              <li><a href="#">NRI demat account</a></li>
              <li><a href="#">Commodity</a></li>
              <li><a href="#">Dematerialisation</a></li>
              <li><a href="#">Fund transfer</a></li>
              <li><a href="#">MTF</a></li>
              <li><a href="#">Referral program</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6">
            <ul className="list-unstyled footer-links">
              <li><strong>Support</strong></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Support portal</a></li>
              <li><a href="#">How to file a complaint?</a></li>
              <li><a href="#">Status of your complaints</a></li>
              <li><a href="#">Bulletin</a></li>
              <li><a href="#">Circular</a></li>
              <li><a href="#">Z-Connect blog</a></li>
              <li><a href="#">Downloads</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6">
            <ul className="list-unstyled footer-links">
              <li><strong>Company</strong></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Philosophy</a></li>
              <li><a href="#">Press & media</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Zerodha Cares (CSR)</a></li>
              <li><a href="#">Zerodha.tech</a></li>
              <li><a href="#">Open source</a></li>
            </ul>
          </div>

          {/* ✅ QUICK LINKS – SAME ROW */}
          <div className="col-lg-3 col-md-6">
            <ul className="list-unstyled footer-links">
              <li><strong>Quick links</strong></li>
              <li><a href="#">Upcoming IPOs</a></li>
              <li><a href="#">Brokerage charges</a></li>
              <li><a href="#">Market holidays</a></li>
              <li><a href="#">Economic calendar</a></li>
              <li><a href="#">Calculators</a></li>
              <li><a href="#">Markets</a></li>
              <li><a href="#">Sectors</a></li>
            </ul>
          </div>

        </div>
      </div>

  );
};

export default Footer;
