import React from "react";

import './search-field.css';

export const SearchField = (props) => (
    <input 
           className='search'
           type='search'
           placeholder= {props.placeholder}
           onChange={ props.handleChange} /> 
)