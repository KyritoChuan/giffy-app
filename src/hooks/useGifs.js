import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from
    "../contexts/GifsContext";

const INITIAL_PAGE = 0;

export const useGifs = ({ keyword } = { keyword: null }) => {
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const { gifs, setGifs } = useContext(GifsContext);
    const [page, setPage] = useState(INITIAL_PAGE);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

    useEffect(() => {
        if (page === INITIAL_PAGE) {
            return;
        }

        setLoadingNextPage(true);

        getGifs({ keyword: keywordToUse, page }).then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs));
            setLoadingNextPage(false);
        });
    }, [page, keywordToUse, setGifs]);


    useEffect(() => {
        setLoading(true);

        getGifs({ keyword: keywordToUse }).then(gifs => {
            setGifs(gifs);
            setLoading(false);
            localStorage.setItem('lastKeyword', keyword);
        });

        return () => { }
    }, [keyword, keywordToUse, setGifs]);

    return { loading, loadingNextPage, gifs, setPage };
}

