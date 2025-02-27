'use client';
import { useQuery } from "@tanstack/react-query";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const ReactQuery = () => {
  const { data, isLoading, error } = useQuery<Todo[]>({
    queryKey: ["key-1"],
    queryFn: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
      {data?.map((todo) => (
        <div key={todo.id}>
          <h1>Id: {todo.id}</h1>
          <h1>Title: {todo.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default ReactQuery;
