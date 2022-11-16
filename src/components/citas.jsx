import { useEffect, useState } from "react";

function Citas(){

    const [quote, setQuote] =  useState(null)
    
    useEffect(function getQuotes(){
        fetch('https://officeapi.dev/api/quotes/random')
            .then(response => response.json())
            .then(data => setQuote(data.data))
    }, [])

    return (
            <div>
                <h2>
                    {quote?.content} by {quote?.character.firstname} {quote?.character.lastname}
                </h2>
            </div>
    )
}

export default Citas;