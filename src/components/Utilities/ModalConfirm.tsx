import React from "react";
import Modal from "./Modal";

const ModalConfirm: React.FC<{
  onConfirm: () => void;
  onClose: () => void;
  text: string;
}> = ({ onConfirm, onClose, text }) => {
  const confirmAndCloseModal = () => {
    onConfirm();
    onClose();
  };
  return (
    <Modal onClose={onClose} title="Are you sure?">
      <p className="text-slate-500">{text}</p>
      <div className="mt-7 ml-auto">
<<<<<<< HEAD
        <button onClick={onClose}>Cancel</button>
        <button onClick={confirmAndCloseModal} className="btn ml-6">
=======
        <button >Cancel</button>
        <button  className="btn ml-6">
>>>>>>> 6121bd2978936fe6d9fc8ecdfc054434f4bb2d43
          Confirm
        </button>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
