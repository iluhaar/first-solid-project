import { createStore } from "solid-js/store";
import { createMemo } from "solid-js";

const [store, setStore] = createStore({
  todo: [
    { id: 1, value: "blah", isActive: true },
    { id: 2, value: "blah2", isActive: true },
    { id: 3, value: "blah3", isActive: false },
  ],
  counter: 3,
});

const addTodo = (text: string) => {
  if (text) {
    setStore("todo", [
      ...store.todo,
      { id: store.counter + 1, value: text, isActive: true },
    ]);
    setStore("counter", store.counter + 1);
  }
};

const toggleTodo = (id: number) => {
  setStore(
    "todo",
    store.todo.map((todo) =>
      todo.id === id
        ? { value: todo.value, id: todo.id, isActive: !todo.isActive }
        : todo
    )
  );
};

const deleteTodo = (id: number) =>
  setStore(
    "todo",
    store.todo.filter((todo) => todo.id !== id)
  );

const todos = createMemo(() => store.todo);

export { todos, toggleTodo, deleteTodo, addTodo };
