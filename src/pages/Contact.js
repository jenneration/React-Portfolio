import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    }
  }

  handleChange = (event) => {

    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <div>
        <div className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlForm="full-name">Full Name</label>
            <input className="form-control" id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlForm="email">Email</label>
            <input className="form-control" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlForm="message">Message</label>
            <input className="form-control" id="message" name="message" as="textarea" rows="5" value={this.state.message} onChange={this.handleChange} />
          </div>

          <button className="d-inline-block" varient="primary" type="submit" disabled={this.state.disabled}>Send</button>

          {this.state.email.Send === true && <p className="d-inline success-msg">Email Sent</p>}
          {this.state.email.Send === false && <p className="d-inline err-msg">Email Sent</p>}
        </div>


        <footer className="main-footer text-center">
          <div className="container-fluid">
            <div className="row row-footer pt-5 pb-5 justify-content-between p-3">
              <div className="col-md-3 col-sm-12 p-0 text-yellow">
                Github
            </div>
              <div className="col-md-3 col-sm-12 p-0 text-yellow">
                This site was made by Jenner
          </div>
              <div className="col-md-3 col-sm-12 p-0 text-yellow">
                LinkedIn
          </div>
            </div>
          </div>
        </footer>

      </div>
    )
  }
};


export default Contact;
