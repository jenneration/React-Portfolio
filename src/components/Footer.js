import React from "react";
import "../index.css";

function Footer(props) {
  return (
    <footer className='footer text-center bg-dark'>
      <div className='container'>
        <div className='row row-footer pt-3 pb-3 justify-content-between p-3'>
          <div className='col-md-3 col-sm-4 col-xs-4 p-0'>
            <a
              class='nav-link active d-inline-block'
              href='https://github.com/jenneration'
            >
              <span>
                <i class='fab fa-github-alt'></i>
              </span>
            </a>
          </div>
          <div className='col-md-3 col-sm-4 col-xs-4 p-0 footerText'>
            &copy; 2021 Jenner Garcia
          </div>
          <div className='col-md-3 col-sm-4 col-xs-4 p-0'>
            <a
              class='nav-link active d-inline-block'
              href='https://www.linkedin.com/in/jennergarcia/'
            >
              <span>
                <i class='fab fa-linkedin-in'></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
