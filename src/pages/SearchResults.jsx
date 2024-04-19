import { useCallback, useEffect, useRef } from "react";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../hooks/useGifs";
import { useNearScreen } from "../hooks/useNearScreen";
import debounce from 'just-debounce-it';


export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });
    const externalRef = useRef();
    const { showNearScreen } = useNearScreen({ externalRef, once: false });

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), []);

    useEffect(() => {
        console.log(showNearScreen);
        if (showNearScreen) {
            debounceHandleNextPage();
        }
    }, [showNearScreen, debounceHandleNextPage]);


    return (
        <>
            {loading ? (
                <i>Loading...</i>
            ) : (
                <>
                    <h3 className="App-title">{keyword}</h3>
                    <ListOfGifs gifs={gifs} />
                    <div id={"visor"} ref={externalRef}></div>
                </>
            )}
        </>
    )
}

