import React from "react";
import pic from "../images/profile-pic-1.jpg";

class Contact extends React.Component {
  render() {
    return (
      <div className="grid grid-flow-row items-center">
        <div className="flex justify-center items-center m-8">
          <img
            src={pic}
            alt="avatar-1"
            align="CENTER"
            className="rounded-full h-50 w-50"
          />
        </div>
        <div className="flex justify-center items-center mb-4">
          <h1>Mark Anthony Caldoza</h1>
        </div>
        <div>
          <span className="mr-8">📧 caldozamarkse@gmail.com</span>
          <span>📱 +639499286568</span>
        </div>
      </div>
    );
  }
}

export default Contact;
