import React from "react";
class Certificates extends React.Component {
  render() {
    return (
      <div>
        <table cellPadding={8} className="table-auto max-w-4xl">
          <caption>
            <h4>Certificates</h4>
          </caption>
          <tbody>
            <tr>
              <td>
                <span className="font-bold">
                  Information Technology Passport
                </span>
                <span className="italic"> &#8212; PhilNITS</span>
                <br />
                <a
                  href="https://www.philnits.org/passers_IP2018.html#Oct2021IP"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  https://www.philnits.org/passers_IP2018.html#Oct2021IP
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Certificates;
