import React from "react";
import "./ErorModal.css";

function ErorModal(props) {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm}>
        <div className="wrap">
          <header className="header">
            <h2>{props.title}</h2>
          </header>
          <div className="content">
            <p>{props.message}</p>
          </div>
          <footer className="actions"></footer>
          <button onClick={props.onConfirm} className="btn">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErorModal;
