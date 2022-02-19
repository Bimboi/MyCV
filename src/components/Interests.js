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
            <li>Music 🎸🤘</li>
            <li>Youtube Techs 👨‍💻</li>
            <li>Eating 🍽️ and Cooking Food 🥘</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Interests;
