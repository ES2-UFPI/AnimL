import React, { useEffect, useState } from 'react';


function AnimePage() {
    const [info, setInfo] = useState({});
    useEffect(()=>{
      fetch('https://kitsu.io/api/edge/anime/1')
          .then((response) => response.json())
          .then((response) =>{
            setInfo(response);
          });
    }, []);

    return (
        <div className="anime-info">
            <div className="Name"> One piece </div>
            <div className="Sinopse">{info}</div>
            <div className="Name"></div>

            
        </div>
    );
}

export default AnimePage;