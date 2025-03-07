import { create } from 'zustand';

type State = {
  title: string;
  description: string;

  taskModalState: boolean;
  todoModalState: boolean;

  todoEditModalState: boolean;
  taskEditModalState: boolean;

  taskId: string;
  todoId: string;
};

type Action = {
  updateTitle: (title: State['title']) => void;
  updateDescription: (description: State['description']) => void;
  
  openTaskModal: () => void;
  closeTaskModal: () => void;
  
  openTaskEditModal: () => void;
  closeTaskEditModal: () => void;

  openTodoModal: () => void;
  closeTodoModal: () => void;
  
  openTodoEditModal: () => void;
  closeTodoEditModal: () => void;

  updateTaskId: (taskId: State['taskId']) => void;
  updateTodoId: (todoId: State['todoId']) => void;
};

const useModalStore = create<State & Action>((set) => ({
  // initial states
  title: '',
  description: '',

  taskModalState: false,
  todoModalState: false,
  
  todoEditModalState: false,
  taskEditModalState: false,

  taskId: '',
  todoId: '',

  // functions
  updateTitle: (title) => set(() => ({ title: title })),
  updateDescription: (description) => set(() => ({ description: description })),

  openTaskModal: () => set(() => ({ taskModalState: true })),
  closeTaskModal: () => set(() => ({ taskModalState: false })),

  openTaskEditModal: () => set(() => ({ taskEditModalState: true })),
  closeTaskEditModal: () => set(() => ({ taskEditModalState: false })),
  
  openTodoModal: () => set(() => ({ todoModalState: true })),
  closeTodoModal: () => set(() => ({ todoModalState: false })),
  
  openTodoEditModal: () => set(() => ({ todoEditModalState: true })),
  closeTodoEditModal: () => set(() => ({ todoEditModalState: false })),

  updateTaskId: (taskId) => set(() => ({ taskId: taskId})),
  updateTodoId: (todoId) => set(() => ({ todoId: todoId})),
}));

export default useModalStore;