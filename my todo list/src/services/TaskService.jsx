
let tasks = []; 

class TaskService {
  static getTasks() {
    return tasks;
  }

  static addTask(task) {
    tasks.push(task);
  }

  static updateTask(updatedTask) {
    tasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
  }

  static deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
  }
}

export default TaskService;
