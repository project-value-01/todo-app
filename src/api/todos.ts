import api from "./api";

export interface TodoResponse {
  taskId: string;
  title: string;
  isComplete?: boolean;
}

// Fetch all todos for a task
export const fetchTodos = async (taskId: string, token: string) => {
  const response = await api.get(`/todo/${taskId}`,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return response.data;
};

// Create a todo
export const createTodo = async (todoData: object, token: string) => {
  const response = await api.post('/todo/', todoData,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return response.data;
};

// Update a todo
export const updateTodo = async (todoData: object, token: string) => {
  const response = await api.put(`/todo/`, todoData,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return response.data;
};

// Delete a todo
export const deleteTodo = async (todoId: string, token: string) => {
  const response = await api.delete(`/todo/${todoId}`,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return response.data;
};

// Toggle todo completion status
export const toggleTodoCompletion = async (todoId: string, token: string) => {
  const response = await api.patch(`/todo/${todoId}`,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return response.data;
};