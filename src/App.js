import { Form } from "./components/Form"; //added
import { Home } from "./components/Home"; //added
import { useState } from "react";
import "./App.css";


function App() {
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      {!user.length > 0 ? (
        <Form setUser={setUser} />
      ) : (
        <Home user={user} setUser={setUser} />
      )
       }
    </div>
  );
}

export default App;
