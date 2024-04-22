import { useCallback, useEffect, useRef } from "react";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../hooks/useGifs";
import { useNearScreen } from "../hooks/useNearScreen";
import debounce from 'just-debounce-it';
import { Box, CircularProgress } from "@mui/material";


export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage, loadingNextPage } = useGifs({ keyword });
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
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircularProgress color="inherit" size={"5rem"} />
                </Box>
            ) : (
                <>
                    <h3 className="App-title">{keyword}</h3>
                    <Box component={"div"} marginBottom={20}>
                        <ListOfGifs gifs={gifs} fromIndex={false} loadNextPage={loadingNextPage} />
                    </Box>
                    <div id={"visor"} ref={externalRef}></div>
                </>
            )}
        </>
    )
}

