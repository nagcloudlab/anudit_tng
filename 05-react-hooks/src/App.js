import { useState } from "react";
import A from "./use-context/A";

// import Counter from "./use-state/Counter";
// import Counter from "./use-reducer/Counter";
// import Counter from "./use-effect/Counter";


function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="container">
      <h1 className="display-1">React Hooks</h1>
      {/* <hr /> */}
      {/* <button onClick={e => setShow(!show)}>toggle</button> */}
      {/* <hr /> */}
      {/* {show && <Counter />} */}
      <hr />
      <A />
    </div>
  );
}

export default App;
