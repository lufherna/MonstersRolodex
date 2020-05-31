import React from 'react'
import './search-box.styles.css'

// functional components don't have access to state
// or constructor
// or have access to life-cycle methods
// all these components do is get some props
// and return some html and thaassss itttt

export const SearchBox = ({ placeholder, handleChange }) => (
    // eslint-disable-next-line no-unused-expressions
    <input 
        className='search' 
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />

);
