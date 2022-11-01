import { useState, useRef } from "react";
import ErorModal from "./UI/ErorModal";
import "./Users.modal.css";

const UsersForm = (props) => {
  const nameEvent = useRef();
  const ageEvent = useRef();
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameEvent.current.value;
    const age = ageEvent.current.value;

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty-values).",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age greater than 0.",
      });

      return;
    }
    //validacija inputa

    nameEvent.current.value = "";
    ageEvent.current.value = ""; //reset inputa
    props.onAddUser(name, age);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErorModal
          tittle={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}

      <form onSubmit={submitHandler} className="wrapper">
        <label>Username</label>
        <input ref={nameEvent} type="text" />
        <label>Age(Years)</label>
        <input ref={ageEvent} type="number" />
        <button type="submit" className="btn">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UsersForm;
