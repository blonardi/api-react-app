import {  useEffect, useState } from "react";


function Episodios(){
    const [episode, setEpisode] = useState({placeholder: 'cargando'})
    const [shouldRefresh, setShouldRefresh] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(function getEpisode(){
        //para mejorar performance y no llamar 2 veces a la API
        if(!shouldRefresh) {
            return;
        }
        
        setIsLoading(true)
        fetch('https://officeapi.dev/api/episodes/random')
            .then(response => response.json())
            .then(data =>                 
                setEpisode(data.data),
                setShouldRefresh(false),
                setIsLoading(false)
            )
    }, [shouldRefresh])
    
    function onRefresh(){
        setShouldRefresh(true)
    }

    if(isLoading) {
        <div>SVG CARGANDO</div>
    }

    if(!episode.title){
        return <div>
            {episode.placeholder}
        </div>
    }

    return (
            <div>
                <button onClick={onRefresh}>Refresh</button>
                <h2>
                    Episode: {episode.title}
                </h2>
                <h4>
                   Description: {episode.description}
                </h4>
            </div>
    )
}

export default Episodios;