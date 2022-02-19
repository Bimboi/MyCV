import React from "react";

class Abilities extends React.Component {
  render() {
    return (
      <div>
        <div className="flex justify-center items-center mb-2">
          <h4>Personal Abilities</h4>
        </div>
        <div className="flex justify-center items-center">
          <ul>
            <li>Adaptability</li>
            <li>Open to one's culture</li>
            <li>Willing to learn</li>
            <li>Interpersonal skills</li>
            <li>Team leader</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Abilities;
