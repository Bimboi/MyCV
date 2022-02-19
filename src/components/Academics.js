import React from "react";

class Academics extends React.Component {
  render() {
    return (
      <div>
        <table cellPadding={8} className="table-auto max-w-4xl">
          <caption>
            <h4>Academic Projects</h4>
          </caption>
          <tbody>
            <tr>
              <td>
                <span className="font-bold">METRO SAFE</span>
                <span className="italic"> &#8212; Developer</span>
                <br />
                <span>
                  An emergency mobile app for road traffic accidents within
                  Metro Manila
                </span>
              </td>
            </tr>
            <tr className="mt-8">
              <td>
                <span className="font-bold">ULAP Meet</span>
                <span className="italic"> &#8212; System Analyst</span>
                <br />
                <span>A videoconferencing mobile app for ULAP company</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Academics;
