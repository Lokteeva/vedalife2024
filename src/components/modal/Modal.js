import React, { useState } from "react";
import "./Modal.css";

export default function Modal({children}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
     <button onClick={toggleModal} className="btnModal">
        Подробнее
      </button>
    

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <div className="modal-content-text">{children}</div>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
      
      
    </>
  );
}
