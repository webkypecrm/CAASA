import React from "react";
import { toast } from "react-toastify";

const Prompt = (message, onYes, onCancel) => {
  return toast.warning(
    <div>
      <p>{message}</p>
      <button className="btn btn-success btn-sm" onClick={() => onYes()}>
        Yes
      </button>
      <button className="mx-2 btn btn-dark btn-sm" onClick={() => onCancel()}>
        Cancel
      </button>
    </div>,
    {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    }
  );
};

export default Prompt;
