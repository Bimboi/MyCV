import React from "react";

class Personal extends React.Component {
  render() {
    return (
      <div className="grid grid-flow-row items-center">
        <table
          cellPadding={4}
          className="table-fixed"
        >
          <caption>Personal Information</caption>
          <tbody>
            <tr>
              <td>Brithday: </td>
              <td>July 19, 1999</td>
            </tr>
            <tr>
              <td>Gender: </td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Religion: </td>
              <td>Roman Catholic</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Personal;
