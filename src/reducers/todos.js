// @flow
import type { Todos, Id } from '../types/todos';

const toggleTodo = (todos: Todos, id: Id): Todos =>
  todos.map(t => (t.id !== id ? t : { ...t, completed: !t.completed }));

  const todos = (state: Todos = [], action: Object) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return toggleTodo(state, action.id);
    default:
      return state
  }
}

export default todos
