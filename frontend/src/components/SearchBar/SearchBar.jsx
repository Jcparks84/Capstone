import React, { useState } from 'react';


const SearchBar = (props) => {
    return(
        <input type='search'
        className='search'
        placeholder={props}
        onChange={props.handleChange}
        />
    )

}

export default SearchBar