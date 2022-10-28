import React, { useState } from "react";
import "./styles.css";
import { TextField } from "@mui/material";
import axios from "axios";

import Modal from "react-modal";

const ModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const handleSubmit = () => {
    const opt = {
      method: "POST",
      url: `/team`,
      data: {
        firstName: document.getElementById("firstNameInput").value,
        lastName: document.getElementById("lastNameInput").value,
        title: document.getElementById("titleInput").value,
        story: document.getElementById("storyInput").value,
        favoriteColor: document.getElementById("favoriateColorInput").value,
        photoUrl: document.getElementById("photoUrlInput").value,
      },
    };

    axios(opt)
      .then((res) => {
        if (res.status === 201) {
          console.log("Teammate created");
        }
      })
      .catch((err) => {
        console.log("Creation failed", err);
      });
  };

  return (
    <div className="App">
      <button onClick={toggleModal}>Add teammate</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <TextField id="firstNameInput" label="firstName" variant="outlined" />
        <TextField id="lastNameInput" label="lastName" variant="outlined" />
        <TextField id="titleInput" label="title" variant="outlined" />
        <TextField id="storyInput" label="story" variant="outlined" />
        <TextField
          id="favoriateColorInput"
          label="favoriateColor"
          variant="outlined"
        />
        <TextField id="photoUrlInput" label="photoUrl" variant="outlined" />
        <button onClick={handleSubmit}>submit</button>
      </Modal>
    </div>
  );
};

export default ModalButton;
