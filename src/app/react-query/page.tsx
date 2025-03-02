"use client";
import { Box } from "@chakra-ui/react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ReactQuery = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery<Todo[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (newPost: Post) =>
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      }).then((res) => res.json()),
    onSuccess: (newPost: Post) => {
      queryClient.setQueryData(["posts"], (oldPosts: Post) => [
        ...oldPosts,
        newPost,
      ]);
      
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || isError) return <p>Error fetching data</p>;

  return (
    <div>
      {isPending && <p>Data is Adding</p>}
      <button
        onClick={() =>
          mutate({
            userId: 50000,
            id: 4000,
            title: "Hey My name is sahil",
            body: "Body of the post",
          })
        }
      >
        Add Post
      </button>
      {data?.map((todo) => (
        <Box key={todo.id} width={"50%"} border={"2px"}>
          <h1>Id: {todo.id}</h1>
          <h1>Title: {todo.title}</h1>
        </Box>
      ))}
    </div>
  );
};

export default ReactQuery;
