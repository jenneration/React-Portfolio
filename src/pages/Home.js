import React from "react";
import "../index.css";
import avatar from "../assets/avatar.png";

const Home = () => (
  <div className="main">
    <div className="container container-jgMain">
      <div className="row row-main align-items-center">
        <div className="col-sm">
          <p className="mainTagLine stuff-jg">
            Hello! <br class="d-none d-sm-block" />
            I'm Jenner
          </p>
        </div>
        <div className="col-sm">
          <img
            src={avatar}
            className="image-fluid mx-auto image-jgMain stuff-jg"
            alt="avatar" />
        </div>
        <div className="col-sm">
          <div className="stuff-jg">
            <h2>WebDev Rookie</h2>
            <p>Just started my journey in web development.</p>
            <h3><strong>Current skills include:</strong></h3>
            <p>
              JavaScript<br />HTML<br />CSS<br />CSS Frameworks: Bootstrap and
              Bulma <br />jQuery<br />Ajax and APIs<br />Node.js<br />Express.js<br />MySql, Sequelize<br />Mongo, MongooseDB<br />React
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
