import React from "react";

class Work extends React.Component {
  render() {
    return (
      <div>
        <table cellPadding={8} className="max-w-4xl">
          <caption>
            <h4>Work Experience</h4>
          </caption>
          <tbody>
            <tr>
              <td className="text-right">
                <span className="text-blue-600 dark:text-blue-300 font-bold">
                  Realtair Incorporated
                </span>
                <br />
                <span>January 2022 - Current</span>
              </td>
              <td>
                <span className="font-bold">Software Engineering Intern</span>
                <br />
                <span>Technical Support</span>
                <br />
                <ul className="ml-6">
                  <li>
                    Handle and manage support tickets. Investigate on
                    integrations such as CRMs and property finders to
                    troubleshoot concerns with the product. Manage migrations of
                    accounts and resources. Delivers reports and statistics to
                    stakeholders.
                  </li>
                  <li>
                    Work closely with TS leads and cross-functional teams to
                    develop and ensure correct evaluation in order to produce
                    correct fixes.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Work;
