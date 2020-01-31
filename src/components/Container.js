import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from "./Card";
import SearchForm from "./SearchForm"

const Container = () => {
    const [characters, setCharacters] = useState([]);

    return(
        <div>
            <h1>This is my Container</h1>
            <SearchForm />
            <Card />
        </div>
    )
}

export default Container;