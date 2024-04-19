import React, { useContext } from "react";
import GifsContext from '../contexts/GifsContext';
import Gif from "../components/Gif";


function Details({ params }) {
    const { gifs } = useContext(GifsContext);
    console.log(gifs);

    const gif = gifs.find(singleGif => singleGif.id === params.id);
    console.log(gif);

    return (
        <>
            <h3 className="App-title">{gif.title}</h3>
            <Gif title={gif.title} id={gif.id} url={gif.url} />
        </>

    )
}

export default Details