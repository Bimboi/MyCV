import React from "react";
import Personal from "./Personal";
import Interests from "./Interests";
import Contact from "./Contact";
import Work from "./Work";
import Education from "./Education";
import Skills from "./Skills";
import Abilities from "./Abilities";
import Acads from "./Academics";
import Seminars from "./Seminars";
import Certs from "./Certificates";

class App extends React.Component {
  render() {
    return (
      <div class="grid place-items-center gap-16">
        <Contact />
        <Personal />
        <Interests />
        <Work />
        <Education />
        <Skills />
        <Abilities />
        <Acads />
        <Seminars />
        <Certs />
      </div>
    );
  }
}
export default App;
