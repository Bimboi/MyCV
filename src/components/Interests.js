import React from "react";
class Interests extends React.Component {
  render() {
    return (
      <div>
        <div className="flex justify-center items-center mb-2">
          <h4>My Preferences</h4>
        </div>
        <div className="flex justify-center items-center">
          <ul>
            <li>Music πΈπ€</li>
            <li>Youtube Techs π¨βπ»</li>
            <li>Eating π½οΈ and Cooking Food π₯</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Interests;
