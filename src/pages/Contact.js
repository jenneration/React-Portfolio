import React from "react";



const Contact = () => (

  <div className="wrapperContact">
    <div className="container container-jgContact">
      <div className="row rowAbout" >
        <div className="col-md-6 offset-md-3 col-sm-10 align-self-center justify-content-center about" >
          <p className="text-center aboutTagLine">Let's chat</p>
          <p className="contactme"><span>&#9786;</span></p>
          <h4 className="text-center">jenner.garcia@gmail.com</h4>
          <br />
          <p><a class="nav-link active text-center text-dark" href="https://www.linkedin.com/in/jennergarcia/"><span><i class="fab fa-linkedin-in"></i></span></a></p>
          <br />
          <p><a class="nav-link active text-center text-dark" href="https://github.com/jenneration"><span><i class="fab fa-github-alt"></i></span></a></p>
        </div>
      </div>
    </div>
  </div >
);


export default Contact;
