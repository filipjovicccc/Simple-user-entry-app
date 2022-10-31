import { useState } from "react";
import "./Users.modal.css";
import NewUsers from "./NewUsers";

const UsersForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    //validacija inputa

    setName("");
    setAge(""); //reset inputa
  };

  const usernameHandler = (e) => {
    setName(e.target.value);
  };

  const userAgeHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="wrapper">
        <label>Username</label>
        <input value={name} onChange={usernameHandler} type="text" />
        <label>Age(Years)</label>
        <input value={age} onChange={userAgeHandler} type="number" />
        <button type="submit" className="btn">
          Add User
        </button>
      </form>
      <NewUsers name={name} age={age} />
    </div>
  );
};

export default UsersForm;
