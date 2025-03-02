"use client";

import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_GAMES = gql`
  query GetGames {
    games {
      id
      title
      platform
    }
  }
`;

const GET_REVIEWS = gql`
  query get_reviews {
    reviews {
      id
      rating
    }
  }
`;


const GraphQL = () => {
  const { loading, error, data } = useQuery(GET_REVIEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {/* <h1>Games List</h1>
      <ul>
        {data.games.map((game: { id: string; title: string; platform: string[] }) => (
          <li key={game.id}>
            <strong>{game.title}</strong> - Platforms: {game.platform.join(", ")}
          </li>
        ))}
      </ul> */}


      <h1>Reviews List</h1>
      <ul>
        {data.reviews.map((review: { id: string; rating: string[] }) => (
          <li key={review.id}>
            <strong>{review.id}</strong> - Platforms: {review.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GraphQL;
