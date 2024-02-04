import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <h1>{this.props.name}</h1>
        <h2>React Developer</h2>
        <h3>Yamunanagar, Haryana</h3>
      </div>
    );
  }
}

export default UserClass;
