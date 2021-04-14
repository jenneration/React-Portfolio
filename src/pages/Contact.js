import React from "react";



const Contact = () => (

  <div className="wrapperContact">
    <div className="container container-jgContact">
      <div className="row rowAbout" >
        <div className="col-md-6 offset-md-3 col-sm-10 align-self-center justify-content-center about" >
          <p className="text-center aboutTagLine">Let's chat</p>
          <br />
          <br />
          <br />
          <h4 className="text-center">jenner.garcia@gmail.com</h4>
          <br />
          <p><a class="nav-link active text-center text-dark" href="https://www.linkedin.com/in/jennergarcia/"><span><i class="fab fa-linkedin-in"></i></span></a></p>
          <br />
          <p><a class="nav-link active text-center text-dark" href="https://github.com/jenneration"><span><i class="fab fa-github-alt"></i></span></a></p>
        </div>
      </div>
    </div>
  </div>
);



// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       message: "",
//       disabled: false,
//       emailSent: null,
//     }
//   }

//   handleChange = (event) => {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();

//     this.setState({
//       disabled: true,
//       emailSent: true
//     })
//   }



//   render() {
//     return (
//       <div className="wrapperContact">
//         <div className="container container-jgContact">
//           <p className="text-center contactTagLine">Let's Chat</p>
//           <div className="form" onSubmit={this.handleSubmit}>
//             <div className="form-group">
//               <label className="form-label" htmlFor="full-name">Full Name</label>
//               <input className="form-control" id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
//             </div>

//             <div className="form-group">
//               <label className="form-label" htmlFor="email">Email</label>
//               <input className="form-control" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
//             </div>

//             <div className="form-group">
//               <label className="form-label" htmlFor="message">Message</label>
//               <textarea className="form-control" id="message" name="message" as="textarea" rows="5" value={this.state.message} onChange={this.handleChange} />
//             </div>

//             <button className="d-inline-block btn btn-dark" varient="primary" type="submit" disabled={this.state.disabled}>Send</button>

//             {this.state.email.Send === true && <p className="d-inline success-msg">Email Sent</p>}
//             {this.state.email.Send === false && <p className="d-inline err-msg">Email Not Sent</p>}
//           </div>
//         </div>
//       </div>
//     )
//   }
// };


export default Contact;
