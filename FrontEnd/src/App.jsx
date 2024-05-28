import { useState } from "react";
import ReadAll from "./ReadAll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./Components/List";
import Home from "./Components/Home";
import "./App.css";
import EditList from "./Components/EditList";
import AddUser from "./Components/AddUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>PlaceHolder</h1>
      <div className="App">
        <List></List>
      </div> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/UsersList" exact={true} element={<List />} />
          <Route path="/UsersUpdateList/:id" element={<EditList />} />
          <Route path="/AddUser" element={<AddUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
