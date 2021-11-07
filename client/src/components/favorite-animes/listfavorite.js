import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../services/api'
// import Card from '../anime/cardAnime';

function FavoritesList() {
    const [animes, setAnimes] = useState({});
    useEffect(()=>{
        async function loadAnimes(){
            const response = await api.get('/api/favoritos');
            console.log(response.data);
            setAnimes(response.data);
        }
        loadAnimes();
    },[]);

    //   fetch('https://kitsu.io/api/edge/trending/anime')
    //       .then((response) => response.json())
    //       .then((response) =>{
    //         setInfo(response);
    //       });
    // }, []);

    return (
      <div className="List">
        {animes.data && (
          <ul className="animes-list">
            {animes.data.map((anime) => (
              <li testid="anime">
               anime.nome_anime
              </li>
            ))}
          </ul>
        )};
       
        
      </div>
    );
}
  
export default FavoritesList;
  