import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const Favorite = () => {
    const {breweryId} = useParams()
    const [user, token] = useAuth();
    const [favorites, setFavorites] = useState(false);

    const favoritesAction = async () => {
        console.log('favorite', favorites);
        
        try{
            let favoritesValue = {
                brewery_id: breweryId,
                user: user.id,
                is_favorite: !favorites
            };
            let response = await axios.post('http://127.0.0.1:8000/api/favorite/1/', favoritesValue, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });
            console.log(response.data);
            if (response.data) {
                console.log('favorites', response.data);
                setFavorites(response.data.is_favorite);
            }
        } catch (error){
            console.log(error);
        }

    }

    return (<>
        <div className='row'>
            <button onClick={() => setFavorites(!favorites)& favoritesAction()}>favorite</button>
        </div>
    </>)
}

export default Favorite;
