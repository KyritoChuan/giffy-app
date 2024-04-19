import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from '../components/ListOfGifs';
import { useGifs } from '../hooks/useGifs';
import LazyTrending from '../components/TrendingSearches/LazyTrending';

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
            <form onSubmit={handleSubmit}>
                <input placeholder='Search a gif here...' onChange={handleChange} type='text' value={keyword} />
                <button>Buscar</button>
            </form>
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className="App-category">
                    <LazyTrending />
                </div>
            </div>
            {/* <h3 className='App-title'>Última busqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className='App-title'>Los gifs más populares</h3>
            <div style={{ display: "grid" }}>
                {
                    POPULAR_GIFS.map((popularGif) => (
                        <Link key={popularGif} to={`/search/${popularGif}`}>
                            Gifs de {popularGif}
                        </Link>
                    ))
                }
            </div> */}
        </>
    )
}

