import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => <h1 className="heading">This is heading</h1>;

const Body = () => (
  <div id="container">
    <Heading />
    <h2 className="body">This is body</h2>;
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
