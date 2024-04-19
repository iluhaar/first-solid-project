import { Title } from "@solidjs/meta";
import TodoList from "~/components/Todo/Todo";

export default function TodoPage() {
  return (
    <main>
      <Title>Todo list</Title>
      <TodoList />
    </main>
  );
}
