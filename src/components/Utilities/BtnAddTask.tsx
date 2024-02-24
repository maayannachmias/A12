import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";

const BtnAddTask: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch();

  const onOpenModal = () => {
    dispatch(modalActions.openModalCreateTask());
  };

  return (
    <button
      className={`btn ${className}`}
<<<<<<< HEAD
      onClick={onOpenModal}
=======
>>>>>>> 6121bd2978936fe6d9fc8ecdfc054434f4bb2d43
    >
      {/* For small to medium screens, show only "+" */}
      <span className="xl:hidden ">+</span>
      {/* For large screens and up, show "Add New Task" */}
      <span className="hidden xl:inline">Add New Task</span>
    </button>
  );
};

export default BtnAddTask;
