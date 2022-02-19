import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div>
        <table cellPadding={8} className="max-w-4xl ">
          <caption>
            <h4>Educational Attainment</h4>
          </caption>
          <tbody>
            <tr>
              <td className="text-right">
                <span className="text-blue-600 dark:text-blue-300 font-bold">
                  UNIVERSITY OF SANTO TOMAS
                </span>
                <br />
                <span>August 2018 - Current</span>
              </td>
              <td>
                <span className="font-bold">
                  Bachelor of Science in Information Technology Specialization
                  in Web and Mobile Application Development
                </span>
                <br />
                <span>
                  Dean's Lister 1<sup>st</sup> Year, 1<sup>st</sup> Semester,
                  A.Y. 2018-2019
                </span>
                <br />
                <span>
                  Dean's Lister 2<sup>nd</sup> Year, 2<sup>nd</sup> Semester,
                  A.Y. 2019-2020
                </span>
                <br />
                <span>
                  Dean's Lister 3<sup>rd</sup> Year, 1<sup>st</sup> Semester,
                  A.Y. 2020-2021
                </span>
                <br />
                <span>
                  Dean's Lister 3<sup>rd</sup> Year, 2<sup>nd</sup> Semester,
                  A.Y. 2020-2021
                </span>
                <br />
                <span>
                  Dean's Lister 4<sup>th</sup> Year, 1<sup>st</sup> Semester,
                  A.Y. 2021-2022
                </span>
              </td>
            </tr>
            <tr>
              <td className="text-right">
                <span className="text-blue-600 dark:text-blue-300 font-bold">
                  STATEFIELDS SCHOOL INCORPORATED
                </span>
                <br />
                <span>June 2016 - April 2018</span>
              </td>
              <td>
                <span className="font-bold">Senior High School</span>
                <br />
                <span>
                  Science, Technology, Engineering, and Mathematics (STEM)
                  Strand
                </span>
                <br />
                <span>
                  Finished with honors (3<sup>rd</sup> medal)
                </span>
              </td>
            </tr>
            <tr>
              <td className="text-right">
                <span className="text-blue-600 dark:text-blue-300 font-bold">
                  STATEFIELDS SCHOOL INCORPORATED
                </span>
                <br />
                <span>June 2012 - April 2016</span>
              </td>
              <td>
                <span className="font-bold">Junior High School</span>
                <br />
                <span>
                  Took basic elective courses related to Electrical engineering
                </span>
                <br />
                <span>
                  Finished with honors (3<sup>rd</sup> medal)
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Education;
