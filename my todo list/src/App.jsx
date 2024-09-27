import React, { useState, useEffect } from 'react';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import DeleteConfirmation from './Components/DeleteConfirmation';
import TaskService from './services/TaskService';
import './App.css';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    const loadTasks = () => {
      const storedTasks = TaskService.getTasks();
      setTasks(storedTasks);
    };
    loadTasks();
  }, []);

  const handleAddTask = (task) => {
    TaskService.addTask(task);
    setTasks(TaskService.getTasks());
    setIsModalOpen(false);
  };

  const handleEditTask = (task) => {
    TaskService.updateTask(task);
    setTasks(TaskService.getTasks());
    setIsModalOpen(false);
  };

  const handleDeleteTask = (id) => {
    TaskService.deleteTask(id);
    setTasks(TaskService.getTasks());
    setIsDeleteModalOpen(false);
  };

  const openModal = (task = null) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const openDeleteModal = (task) => {
    setTaskToDelete(task);
    setIsDeleteModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };

  const closeDeleteModal = () => {
    setTaskToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const refreshTasks = () => {
    setTasks(TaskService.getTasks());
  };

  return (
    <div className="slds-p-around_large">
      <h1 className="slds-text-heading_large">To-Do List</h1>

      <div className="slds-grid slds-grid_align-spread slds-m-bottom_medium">
        <div>
          <button className="slds-button slds-button_brand" onClick={() => openModal()}>New Task</button>
          <button className="slds-button slds-button_neutral" onClick={refreshTasks}>Refresh</button>
        </div>
        <div>
          <input type="text" className="slds-input search-bar" placeholder="Search tasks" />
        </div>
      </div>

      <TaskList
        tasks={tasks}
        onEdit={openModal}
        onDelete={openDeleteModal}
      />

      {isModalOpen && (
        <TaskForm
          task={selectedTask}
          onSave={selectedTask ? handleEditTask : handleAddTask}
          onClose={closeModal}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteConfirmation
          task={taskToDelete}
          onConfirm={() => handleDeleteTask(taskToDelete.id)}
          onCancel={closeDeleteModal}
        />
      )}
    </div>
  );
}

export default App;
