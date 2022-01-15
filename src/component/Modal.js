import React from "react";
import "../Assets/css/Modal.css";

import image1 from "../Assets/images/1.jpg";
export const Modal = () => {
  // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  const close = () => {
    document.getElementById("myModal").style.display = "none";
  };

  return (
    <>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={close}>
            &times;
          </span>
          <img src={image1} alt="First slide" />
        </div>
      </div>
    </>
  );
};
