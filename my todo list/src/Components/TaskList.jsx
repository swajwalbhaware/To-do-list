import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <table className="slds-table slds-table_bordered">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th>Assigned To</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Comments</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <td><input type="checkbox" /></td>
            <td>{task.assignedTo}</td>
            <td>{task.status}</td>
            <td>{task.dueDate}</td>
            <td>{task.priority}</td>
            <td>{task.comments}</td>
            <td>
              <button className="slds-button slds-button_neutral" onClick={() => onEdit(task)}>Edit</button>
              <button className="slds-button slds-button_destructive" onClick={() => onDelete(task)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
