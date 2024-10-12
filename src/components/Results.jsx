import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Results({ dog, artwork }) {
  // reference the context for the "name".

    const { name } = useContext(UserContext);

  return (
    <div>
      <p>
        <strong>{name}</strong>, your Breed is: {dog.toUpperCase()}.
      </p>
      {artwork ? (
        <div className="artwork">
          <h2>{artwork.title}</h2>
          <img src={artwork} alt={artwork} />
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}