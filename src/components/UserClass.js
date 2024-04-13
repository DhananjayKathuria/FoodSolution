import React from "react";
import UserContext from "../utils/userContext";
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
        {/* Using context in class based component */}
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
