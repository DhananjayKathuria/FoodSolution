import UserClass from "./UserClass";
// Using UserClass which is a class-based component
const About = () => {
  return (
    <div>
      <h1>This is About Us page</h1>
      <UserClass name={"Dhananjay"} />
    </div>
  );
};

export default About;
