import React, { Suspense } from 'react';
import { useNearScreen } from '../../hooks/useNearScreen';

//Import dinamico (asincrono). Se descargará solo cuando React lo diga.
//Esto devuelve una Promise. El componente Suspense indica que renderizar mientras carga el componente.
const TrendingSearches = React.lazy(() => import('./TrendingSearches'));


export default function LazyTrending() {
    const { showNearScreen, fromRef } = useNearScreen({ distance: "100px" });

    return <div ref={fromRef}>
        <Suspense fallback={null}>
            {showNearScreen ? <TrendingSearches /> : null}
        </Suspense>
    </div>
}

