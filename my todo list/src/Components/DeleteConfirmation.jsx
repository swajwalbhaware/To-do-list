import React from 'react';

const DeleteConfirmation = ({ task, onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Delete Task</h2>
        <p style={{ color: 'red' }}>Are you sure you want to delete this task?</p>
        <p><strong>{task?.assignedTo}</strong></p>
        <button className="btn confirm-btn" onClick={onConfirm}>Yes, Delete</button>
        <button className="btn cancel-btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
