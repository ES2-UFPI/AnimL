import React from 'react';
import './animePage.css';

function AnimePage(props) { 
  
    return (
        <div className="info">
            <div className="info--bg"
            style={{ backgroundImage: `url(${props.coverImage})`}}
            >
            </div>    
            <button className="info--button__back">
                <span className="material-icons">navigate_before</span>
                voltar
            </button>
            <div className="info--box">
                <img src={props.poster}></img>
                <button className="info--btn-fav info--btn-fav__active">Add aos favoritos</button>
            </div>
            <div className="info--anime">
                <h1>{props.nome}</h1>
                <div className="info--score">
                    <span className="material-icons">grade</span>
                    {props.average}
                </div>
                <p className="info--genres"></p>
                <p>{props.synopsi}</p>
            </div>
        </div>
    );
}

export default AnimePage;