import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import useAuth from "../../hooks/useAuth";
import "./FavoritePage.css";

const FavoritePage = () => {
    const [data, setData] = useState([]);
    const [user, token] = useAuth();

    useEffect(() => {
        const fetchCars = async () => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/favorite/", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                console.log("favourite Response", response.data);
                setData(response.data.length ? response.data : []);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchCars();
    }, [token]);


    return (
        <div className="container">
            <h1>Favourite Page</h1>
            {data && data.length && data.map((item, index) => {
                return (
                    <div className='container' key={index}>
                        <p className='breweryInfo'>{item.user.username} : {item.brewery_id}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default FavoritePage;
