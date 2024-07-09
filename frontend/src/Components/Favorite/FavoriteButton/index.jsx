import React, { useState } from "react";
import "./favoriteStyling.css";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        setIsFavorite(!isFavorite);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
    </button>
  );
}