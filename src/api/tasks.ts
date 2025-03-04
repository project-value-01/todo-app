import api from "./api";

export type Task = {
  _id?: string;
  clerkId?: string;
  description?: string;
  background?: string;
  taskId?: string;
};

// Fetch all tasks for a user
export const fetchTasks = async (clerkId: string, token: string) => {
  const response = await api.get(`/task/${clerkId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  return response.data.tasks;
};

// Fetch a single task
export const fetchTask = async (taskId: string, token: string) => {
  const response = await api.get(`/task/task/${taskId}`, {
     headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  return response.data.task;
}

// Create a task
export const createTask = async (taskData: object, token: string) => {
  const response = await api.post('/task/', taskData, {
    headers: {
      'Authorization': `Bearer ${token}`, 
    }
  });

  return response.data;
};

// Update a task
export const updateTask = async (taskData: object, token: string) => {
  const response = await api.put('/task/', taskData, {
    headers: {
      'Authorization': `Bearer ${token}`,    
    }
  });

  return response.data;
};

// Delete a task
export const deleteTask = async (taskId: string, token: string) => {
  const response = await api.delete(`/task/${taskId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,   
    }
  });

  return response.data;
};