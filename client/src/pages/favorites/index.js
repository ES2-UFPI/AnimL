import React, { useEffect, useState } from 'react';
import './style.css';
import FavoritesList from '../../components/favorite-animes/listfavorite'

function Favorites() {
    return (
      <div className="Favorites">
        <h1>Favorite Animes</h1>
        <FavoritesList/>
      </div>
    );
  }

export default Favorites;