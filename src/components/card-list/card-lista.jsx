import React from 'react';
import { Card } from '../card/card';
import './card-list.css';

export const CardList = props => (
    <div className='card-list'>
        {props.gatetes.map(cat => (
            <Card key={cat.id} gato={cat} />
        ))}
    </div>
)