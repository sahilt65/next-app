'use client'
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { UserDocument } from "../graphql/graphql";

const GraphQLReactQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", 1],
    queryFn: async () => {
      const response = await fetch("https://graphqlplaceholder.vercel.app/graphql", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: UserDocument,
          variables: { id: 1 }
        })
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return response.json();
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const user = data.data?.userById;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h2>{user.name} (@{user.username})</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website:{user.website}</p>
      <h3>Address:</h3>
      <p>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      <p>Coordinates: {user.address.geo.lat}, {user.address.geo.lng}</p>
      <h3>Company:</h3>
      <p>{user.company.name}</p>
      <p>{user.company.catchPhrase}</p>
      <p>{user.company.bs}</p>
    </div>
  );
};

export default GraphQLReactQuery;
