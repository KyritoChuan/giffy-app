import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from '../components/ListOfGifs';
import { useGifs } from '../hooks/useGifs';
import LazyTrending from '../components/TrendingSearches/LazyTrending';
import { Box, Grid, Input, TextField } from '@mui/material';

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const { loading, gifs } = useGifs();


    const handleSubmit = (evt) => {
        evt.preventDefault();
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = (evt) => {
        setKeyword(evt.target.value);
    }

    return (
        <>
            <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
                <div className="App-main">
                    <Grid container spacing={2}>
                        <Grid item md={12} xs={12}>
                            <form onSubmit={handleSubmit}>
                                <input placeholder='Search a gif here...' onChange={handleChange} type='text' value={keyword} />
                                <button>Buscar</button>
                            </form>
                        </Grid>
                        <Grid item md={9} xs={12}>
                            <div className="App-results">
                                <h3 className="App-title">Última búsqueda</h3>
                                <ListOfGifs gifs={gifs} fromIndex={true} />
                            </div>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <div className="App-category">
                                <LazyTrending />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Box>

        </>
    )
}

