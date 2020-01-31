import React, { useState, useEffect } from 'react';



const Card = ({ character }) => {

    return(
        <div key={character.id}>
            <img src={character.img} alt="Breaking Bad Character" />
            <h1>Name: {character.name}</h1>
            <h1>Nickname: {character.nickname}</h1>
            <h2>Birthday: {character.birthday}</h2>
            <h2>Occupation: {character.occupation}</h2>
        </div>
    )
}

export default Card;