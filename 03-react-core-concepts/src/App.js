
import { useState } from 'react';

function App(props) {
  console.log("App:render()");

  // console.log(props);

  // props.title = "New Title"; // Error: "props" is read-only
  // props.trainer = "New Trainer"; // Error: "props" is read-only

  //let title = props.title || "Unknown";
  //let trainer = props.trainer || "Unknown";
  let { title = "Unknown", trainer = "Unknown" } = props; // Destructuring  

  // let user = {
  //   name: "John",
  //   age: 20
  // }

  const [user, setUser] = useState({
    name: "John",
    age: 20
  }); // hook

  const handleAgeInc = (e) => {
    console.log("handleAgeInc");
    e.preventDefault();
    setUser(prevState => {
      return {
        ...prevState,
        age: prevState.age + 1
      }
    }) // trigger re-render after diffing
  }

  return (
    <>
      <div className="container">
        <div className="display-1">
          {title} by &nbsp;
          <small className="text-muted">{trainer.toUpperCase()}</small>
        </div>
        <hr />
        <div style={{
          color: "red",
          backgroundColor: "yellow"
        }}>Hello, {user.name}</div>
        <div className="text-danger">Age: {user.age}</div>
        <hr />
        <button onClick={handleAgeInc} className="btn btn-danger">+1 age</button>
        <hr />
      </div>
    </>
  )
}

export default App;
