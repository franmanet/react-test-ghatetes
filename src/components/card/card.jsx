import React from "react";
import "./card.css";

export const Card = props => (
    <div className='card'>
        <img alt='gatete' src={`https://robohash.org/${props.gato.name}.png?size=100x100&set=set4`} />
        <h4>{props.gato.name}</h4>
        <p>{props.gato.username}</p>
    </div>
);