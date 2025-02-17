import React, { useContext } from 'react';
import { TodoProvider, TodoContext } from './context/TodoContext';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const { searchTerm, setSearchTerm, sortAlphabetically, setSortAlphabetically } = useContext(TodoContext);

  return (
    <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search todos"
        />
        <button onClick={() => setSortAlphabetically(!sortAlphabetically)}>
          {sortAlphabetically ? 'Sort by Default' : 'Sort Alphabetically'}
        </button>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
