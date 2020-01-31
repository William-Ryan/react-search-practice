import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";


import Card from "./Card";
// import SearchForm from "./SearchForm"

const Container = () => {
    const [characters, setCharacters] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/characters`)
        .then(res => {
            console.log(res);
            const breaking = res.data.filter(name => 
                name.name.toLowerCase().includes(search.toLowerCase())
                );
            setCharacters(breaking);
        })
        .catch(err => {
            console.log(err);
        })
    }, [search])

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return(
        <div>
            <NavLink to="/home">Home Page</NavLink>
            <h1>This is my Container</h1>
            <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Search
                    <input
                    type="text"
                    placeholder="Search 🔎"
                    name="character"
                    value={search}
                    onChange={handleChange}
                    />
                </label>
            </form>
        </div>
            {characters.map(char => (
                <Card character={char}/>
            ))}
            
            
        </div>
    )
}

export default Container;