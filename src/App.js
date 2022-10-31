import { useState } from "react";
import UsersForm from "./components/UsersForm";
// import AddedUsers from "./components/AddedUsers";


function App() {
  const [items, setItems] = useState([]);

  return (
    <div>
      <UsersForm />
  
    </div>
  );
}

export default App;
