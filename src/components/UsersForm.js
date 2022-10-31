import { useState } from "react";
import "./Users.modal.css";


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
    props.onAddUser(name, age);
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
        <input onChange={usernameHandler} type="text" />
        <label>Age(Years)</label>
        <input onChange={userAgeHandler} type="number" />
        <button type="submit" className="btn">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UsersForm;
