import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
function App() {
  const actors = [
    { name: "John", age: 20 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 30 },
    { name: "Smith", age: 35 },
  ];
  const singers = ["John", "Jane", "Doe", "Smith"];
  

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        {actors.map((actor) =><Actor name={actor.name} age={actor.age} />)}
        
      </div>
      <div>
        {singers.map((singer) => (
          
          <Singer name={singer} />
        ))}
      </div>
      <div>
        <Person />
        <Person />
        <Person />
        {/* <Device name = "Device"  price = "1000"/>
        <Device name = "Laptop"  price = "2000"/> */}
        <DeviceList name="Mobile" price="1000" />
        <DeviceList name={"Tablet"} price={2000} />
        <DeviceList name={"Laptop"} />
        <DeviceList name={"Desktop"} />
        <Todo task="Learn React" isDone={true} />
        <Todo task="Learn JavaScript" isDone={false} />
        <Todo task="Learn CSS" isDone={true} />
        <Todo task="Learn HTML" isDone={false} />
      </div>
    </>
  );
}
function Person() {
  const age = 20;
  const person = { name: "John", age: 20 };
  return (
    <>
      <h1>
        I am a {person.name} {person.age} with age {age}
      </h1>
      <Student />
    </>
  );
}
function Student() {
  const student = { student_id: 1, name: "John", age: 20 };
  return (
    <div className="student">
      <h1>
        I am a {student.name} {student.age} with student id {student.student_id}
      </h1>
      <Developer />
      <Device />
    </div>
  );
}
function Developer() {
  const developerStyle = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
    border: "2px solid black",
    padding: "10px",
    margin: "20px",
    borderRadius: "10px",
    backgroundColor: "lightgray",
    textAlign: "center",
  };
  return (
    <div style={developerStyle}>
      <h1>I am a Developer</h1>
    </div>
  );
}

function Device(props) {
  console.log(props);
  // const device = { device_id: 1, name: 'John', age: 20 }
  return (
    <h2>
      I am a Device {props.name} {props.price}
    </h2>
  );
}

// const {name, price} = {name: 'John', age: 20}
function DeviceList({ name, price = 0 }) {
  console.log(name, price);
  const deviceStyle = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
    border: "2px solid black",
    padding: "10px",
    margin: "20px",
    borderRadius: "10px",
    backgroundColor: "lightgray",
    textAlign: "center",
  };
  return (
    <div style={deviceStyle}>
      <h1> Device</h1>
      <Device name={name} price={price} />
    </div>
  );
}

export default App;
