import React from "react";



const Modal = () => {
  return (
    <>
      
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
       Details
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
           
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">User Details..</h3>
          <p className="py-4">User Name</p>
          <p className="py-4">User Work</p>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
