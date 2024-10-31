interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }
  
  const tasks: Record<string, Task> = {};
  
  export const addTask = (task: Task) => tasks[task.id] = task;
  export const getTask = (id: string) => tasks[id];
  export const getAllTasks = () => Object.values(tasks);
  export const updateTask = (id: string, updatedTask: Partial<Task>) => Object.assign(tasks[id], updatedTask);
  export const deleteTask = (id: string) => delete tasks[id];
  