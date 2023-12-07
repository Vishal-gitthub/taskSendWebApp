import React, { useState } from "react";
import { useRef } from "react";

const Content = () => {
  let [alertStatus, setAlertStatus] = useState(false);
  const task = useRef();
  const sendData = () => {
    let taskvalue = task.current.value;
    let currentTask = {
      title: taskvalue,
    };
    fetch("https://fir-task-app-42a81-default-rtdb.firebaseio.com/:task.json", {
      method: "POST",
      body: JSON.stringify(currentTask),
    }).then(() => {
      setAlertStatus(true);
    });
  };

  const HideBtn = () => {
    setAlertStatus(false)
  };

  return (
    <>
      <div className={alertStatus == true ? "alert" : "d-none"}>
        Task Added
        <button className="crossBtn" onClick={HideBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fillRule="white"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
      </div>
      <div className="container">
        <div className="input-btn">
          <input
            className="inputTag"
            type="text"
            ref={task}
            placeholder="Send Task"
            required
          />

          <button className="dataSendBtn" onClick={sendData}>
            Send Data
          </button>
        </div>
      </div>
    </>
  );
};

export default Content;
