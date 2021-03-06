import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Wrapper from "./Wrapper";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

class Portfolio extends Component {
  state = {
    currentPage: "Home",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Projects") {
      return <Projects />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
