import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent did mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This a learning react about page</h2>
        <UserClass
          name={"Ashwani Sajwan (class-based)"}
          location={"Kotdwara (class-based)"}
        />
      </div>
    );
  }
}

export default About;
