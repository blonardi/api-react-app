import {  useEffect, useState } from "react";

function Personajes(){
    const [character, setCharacter] = useState(null)

    useEffect(function getCharacters(){
        fetch('https://officeapi.dev/api/characters/random')
            .then(response => response.json())
            .then(data => setCharacter(data.data))
    }, [])
    
    if(!character){
        return null
    }

    return (
            <div>
                <h2>
                    {character?.firstname} {character?.lastname} 
                </h2>
            </div>
    )
}

export default Personajes;