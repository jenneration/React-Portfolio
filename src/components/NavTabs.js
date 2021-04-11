import React from "react";
import "bootstrap/js/src/collapse.js"; //For navbar functionality
function NavTabs(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-jgMain">
        <div className="container">
          <a className="navbar-brand navbar-brand-jg" href="index.html" >JENNERATION</a>
          <button
            className="navbar-toggler navbar-dark bg-dark" type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup">

            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#home"
                onClick={() => props.handlePageChange("Home")}
                className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}>
                Home<span className="sr-only">(current)</span>
              </a>

              <a className="nav-item nav-link active" href="#about"
                onClick={() => props.handlePageChange("About")}
                className={props.currentPage === "About" ? "nav-link active" : "nav-link"}>
                About
              </a>

              <a className="nav-item nav-link active" href="#projects"
                onClick={() => props.handlePageChange("Projects")}
                className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}>
                Projects
              </a>

              <a className="nav-item nav-link active" href="#contact"
                onClick={() => props.handlePageChange("Contact")}
                className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div >

  );
}

export default NavTabs;
