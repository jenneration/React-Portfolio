import React from "react";
import "../index.css";
import avatar from "../assets/avatar.png";

const Home = () => (
  <div className="wrapper">
    <div className="container container-jgMain">
      <div className="row d-flex align-items-center">
        <div className="col-sm">
          <p className="mainTagLine stuff-jg text-center">
            Hello! <br className="d-none d-sm-block" />
            I'm Jenner
          </p>
        </div>
        <div className="col-sm">
          <img
            src={avatar}
            className="image-fluid mx-auto image-jgMain stuff-jg"
            alt="avatar" />
        </div>
        <div className="col-sm text-center">
          <div className="stuff-jg">
            <h3 className="h3Main"><strong>WebDev Rookie</strong></h3>
            <p>Just started my journey in web development.</p>
            <h4 className="h4Main">Current skills:</h4>
            <p>
              JavaScript<br />HTML<br />CSS<br />Bootstrap and
              Bulma <br />jQuery<br />APIs<br />Node.js<br />Express.js<br />MySql, Sequelize<br />Mongo, MongooseDB<br />React
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default Home;
