import axios from 'axios';
import React, { useState } from 'react';
import { ReactDOM } from 'react-dom'
import './Tags.css'

const Tags = props => {
    const [tags, SetTags] = useState([]);
    
    
    const addTags = e => {
        if(e.key === 'Enter' && e.target.value !==''){
            SetTags([...tags, e.target.value]);
            props.selectTags([...tags, e.target.value]);
            e.target.value = '';
        }
    
    };

    // async function addTags(){
    //     try{
    //         let response = await axios.post()
    //     }
    // };

    const removeTags = index => {
        SetTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    }

    return(
        <div className='Tags'>
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>
                    <p> {tag} </p>
                    <i className='material-icons'
                    onClick={() => removeTags(index)}
                    >
                        </i>
                    </li>
                ))}
            </ul>
            <input 
            type='text'
            onKeyUp={e=>addTags(e)} 
            placeholder='add tag'/>
        </div>
    )
}

export default Tags;