import { createContext } from "react";

const UserContext = createContext({
  //   setting the initial value:
  loggedInUser: "Default User",
});

export default UserContext;
