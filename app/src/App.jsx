import React, { useState } from "react";
import "./App.css";
import { Input } from "./components/Input.jsx";
import Value from './components/Value.jsx'

function App() {
  const [load, setLoad] = useState(true);

  const handleEvent = () => setLoad(false);
  

  return (
    <div>
      {/* {load ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Input onLoad={handleEvent} />
        </div>
      )} */}

      <div>
        <Input/>
      </div>
    </div>
  );
}

export default App;
