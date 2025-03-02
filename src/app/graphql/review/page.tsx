"use client";

import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      id
      rating
      content
    }
  }
`;

const GraphQL = () => {
  const [reviewId, setReviewId] = useState("");
  const [fetchReview, { loading, error, data }] = useLazyQuery(GET_REVIEW);

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ color: "#4CAF50" }}>Fetch Review by ID</h1>
      
      <input
        type="text"
        placeholder="Enter Review ID"
        value={reviewId}
        onChange={(e) => setReviewId(e.target.value)}
        style={{
          backgroundColor: "#222",
          color: "#fff",
          border: "1px solid #4CAF50",
          padding: "10px",
          marginRight: "10px",
          borderRadius: "5px",
          outline: "none"
        }}
      />
      
      <button
        onClick={() => fetchReview({ variables: { id: reviewId } })}
        style={{
          backgroundColor: "#4CAF50",
          color: "#fff",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        Fetch Review
      </button>

      {loading && <p style={{ color: "#FFA500" }}>Loading...</p>}
      {error && <p style={{ color: "#FF5733" }}>Error: {error.message}</p>}

      {/* Handle case when review ID is not found */}
      {data && !data.review && (
        <p style={{ color: "#FF5733", marginTop: "10px" }}>
          ❌ No review found for ID: <strong>{reviewId}</strong>
        </p>
      )}

      {data && data.review && (
        <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#222", borderRadius: "5px" }}>
          <h3 style={{ color: "#4CAF50" }}>Review Details</h3>
          <p><strong>ID:</strong> {data.review.id}</p>
          <p><strong>Rating:</strong> {data.review.rating}</p>
          <p><strong>Content:</strong> {data.review.content}</p>
        </div>
      )}
    </div>
  );
};

export default GraphQL;
