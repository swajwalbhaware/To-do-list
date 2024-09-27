import React, { useState, useEffect } from 'react';

const TaskForm = ({ task, onSave, onClose }) => {
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');
  const [comments, setComments] = useState('');

  useEffect(() => {
    if (task) {
      setAssignedTo(task.assignedTo);
      setStatus(task.status);
      setDueDate(task.dueDate);
      setPriority(task.priority);
      setComments(task.comments);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: task ? task.id : Date.now(),
      assignedTo,
      status,
      dueDate,
      priority,
      comments,
    };
    onSave(newTask);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Assigned To</label>
              <input
                type="text"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                required
                className="slds-input"
              />
            </div>

            <div className="form-group">
              <label>Status</label>
              <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
                className="slds-input"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
                className="slds-input"
              />
            </div>

            <div className="form-group">
              <label>Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                required
                className="slds-input"
              >
                <option value="Low">Low</option>
                <option value="Normal">Normal</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
              className="slds-input"
            ></textarea>
          </div>

          <button type="submit" className="slds-button slds-button_brand">
            {task ? 'Update Task' : 'Add Task'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
