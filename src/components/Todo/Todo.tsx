import { createSignal, For } from "solid-js";
import { todos, addTodo, toggleTodo, deleteTodo } from "~/store/store";

const TodoList = () => {
  const [newTodo, setNewTodo] = createSignal("");

  const inputChange = (inputValue: string) => setNewTodo(inputValue);

  const handleAddNewTodo = () => {
    addTodo(newTodo());
    setNewTodo("");
  };

  return (
    <>
      <h1>Todo page title</h1>
      <input
        type="text"
        name=""
        id="new todo"
        placeholder="Enter todo.."
        value={newTodo()}
        onChange={(e) => inputChange(e.target.value)}
      />
      <button onClick={handleAddNewTodo}> Add todo</button>
      <For each={todos()}>
        {({ value, isActive, id }) => (
          <div>
            <p>
              {value} {id}
            </p>
            <button onClick={() => toggleTodo(id)}>
              {isActive ? "Mark as Done" : "UnDone"}
            </button>
            <button onClick={() => deleteTodo(id)}>Delete</button>
          </div>
        )}
      </For>
    </>
  );
};

export default TodoList;
