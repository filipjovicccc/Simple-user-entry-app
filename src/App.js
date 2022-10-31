import { useState } from "react";
import NewUsers from "./components/NewUsers";
import UsersForm from "./components/UsersForm";
// import AddedUsers from "./components/AddedUsers";

function App() {
  const [items, setItems] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setItems((prevUsers) => {
      return [...prevUsers, { name: uName, age: uAge }];
    });
  };
  return (
    <div>
      <UsersForm onAddUser={addUserHandler} />
      <NewUsers users={items} />
    </div>
  );
}

export default App;
