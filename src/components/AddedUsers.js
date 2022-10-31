import React from "react";
import "./AddedUsers.css";

function AddedUsers(props) {
  console.log(props);
  return (
    <li className="users">
      <div>{props.items.username}</div>
      <div>{props.items.userage}</div>
    </li>
  );
}

export default AddedUsers;
