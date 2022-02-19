import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <div>
        <table cellPadding={4} className="table-auto max-w-4xl">
          <caption>
            <h4>Technical Skills</h4>
          </caption>
          <tbody>
            <tr>
              <td className="text-right">
                <span className="font-bold">Programming Languages</span>
              </td>
              <td>
                <span>HTML, CSS, Javascript, Python, Java, PHP, C#</span>
              </td>
            </tr>
            <tr>
              <td className="text-right">
                <span className="font-bold">Database Management</span>
              </td>
              <td>
                <span>MSSQL, PHPMyAdmin, Firebase</span>
              </td>
            </tr>
            <tr>
              <td className="text-right">
                <span className="font-bold">IDE</span>
              </td>
              <td>
                <span>
                  Visual Studio Code, Visual Studio, Android Studio, PyCharm
                </span>
              </td>
            </tr>
            <tr>
              <td className="text-right">
                <span className="font-bold">UI/UX</span>
              </td>
              <td>
                <span>Balsamiq, Figma</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Skills;
