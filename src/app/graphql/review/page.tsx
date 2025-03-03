"use client";

import React, { useState } from "react";
import { gql, useLazyQuery, useMutation } from "@apollo/client";

const GET_REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      id
      rating
      content
    }
  }
`;

const UPDATE_REVIEW = gql`
  mutation UpdateReview($id: ID!, $rating: Int!, $content: String!) {
    updateReview(id: $id, rating: $rating, content: $content) {
      id
      rating
      content
    }
  }
`;

const GraphQL = () => {
  const [reviewId, setReviewId] = useState("");
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");

  const [fetchReview, { loading, error, data }] = useLazyQuery(GET_REVIEW);
  const [updateReview, { loading: updating, error: updateError, data: updateData }] = useMutation(UPDATE_REVIEW);

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", padding: "20px" }}>
      
      {/* 🔹 Fetch Review Section */}
      <h1 style={{ color: "#4CAF50" }}>Fetch Review by ID</h1>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Enter Review ID"
          value={reviewId}
          onChange={(e) => setReviewId(e.target.value)}
          style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px", border: "1px solid #4CAF50", flex: "1" }}
        />

        <button
          onClick={() => fetchReview({ variables: { id: reviewId } })}
          style={{ backgroundColor: "#4CAF50", color: "#fff", padding: "10px 15px", borderRadius: "5px", cursor: "pointer", border: "none" }}
        >
          Fetch Review
        </button>
      </div>

      {loading && <p style={{ color: "#FFA500" }}>Loading...</p>}
      {error && <p style={{ color: "#FF5733" }}>Error: {error.message}</p>}
      {data && !data.review && <p style={{ color: "#FF5733" }}>❌ No review found for ID: {reviewId}</p>}

      {data && data.review && (
        <div style={{ backgroundColor: "#222", padding: "15px", marginTop: "20px", borderRadius: "5px" }}>
          <h3 style={{ color: "#4CAF50" }}>Review Details</h3>
          <p><strong>ID:</strong> {data.review.id}</p>
          <p><strong>Rating:</strong> {data.review.rating}</p>
          <p><strong>Content:</strong> {data.review.content}</p>
        </div>
      )}

      {/* 🔹 Update Review Section */}
      <h1 style={{ color: "#4CAF50", marginTop: "30px" }}>Update Review</h1>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: "500px" }}>
        <label style={{ marginBottom: "5px", color: "#ccc" }}>New Rating (1-5)</label>
        <input
          type="number"
          placeholder="Enter new rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={{ backgroundColor: "#222", color: "#fff", padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "1px solid #4CAF50" }}
        />

        <label style={{ marginBottom: "5px", color: "#ccc" }}>New Review Content</label>
        <textarea
          placeholder="Enter new review content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px", border: "1px solid #4CAF50", height: "100px" }}
        />
      </div>

      <button
        onClick={() => updateReview({ variables: { id: reviewId, rating: parseInt(rating), content } })}
        style={{ backgroundColor: "#4CAF50", color: "#fff", padding: "10px 15px", borderRadius: "5px", cursor: "pointer", marginTop: "15px", border: "none" }}
      >
        Update Review
      </button>

      {updating && <p style={{ color: "#FFA500" }}>Updating...</p>}
      {updateError && <p style={{ color: "#FF5733" }}>❌ Error: {updateError.message}</p>}
      {updateData && <p style={{ color: "#4CAF50" }}>✅ Review updated successfully!</p>}
      
    </div>
  );
};

export default GraphQL;
