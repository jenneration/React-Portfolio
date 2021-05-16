import React from "react";

const About = () => (
  <div className='wrapperAbout'>
    <div className='container container-jgAbout'>
      <div className='row rowAbout'>
        <div className='col-md-7 offset-md-3 col-sm-8 align-self-center justify-content-center about'>
          <p className='text-center aboutTagLine'>About</p>
          <p className='pheart'>
            <span className='heart text-center'> &#10084; </span>&#10084;{" "}
            <span className='heart'>&#10084; </span>&#10084;{" "}
            <span className='heart'>&#10084; </span>&#10084;{" "}
            <span className='heart'>&#10084; </span>&#10084;{" "}
            <span className='heart text-center'> &#10084; </span>&#10084;{" "}
            <span className='heart'>&#10084; </span>&#10084;{" "}
            <span className='heart'>&#10084; </span>&#10084;{" "}
            <span className='heart'>&#10084; </span>&#10084;
          </p>
          <div className='ml-3 mr-3'>
            <p className='text-center aboutsubTitle'>
              <strong>Just a small town girl. Living in a lonely world.</strong>
              <br />
            </p>
            <p>
              But seriously....
              <br />
              Born in Brooklyn, NY, moved around too much, and eventually
              settled in D.C. Graduated from the Corcoran College of Art +
              Design with a degree in Fine Art Photography.
            </p>
            <p>
              My plan moving forward: Code for a living, photograph for
              pleasure, and get back to finding great places to wander around
              in. <span className='heart'> &#10084; </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
