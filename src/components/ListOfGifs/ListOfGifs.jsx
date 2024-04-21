import { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Gif from '../Gif';

import './ListOfGifs.css';


function ListOfGifs({ gifs, fromIndex }) {
    const [positionGifs, setPositionGifs] = useState();

    useEffect(() => {
        if (fromIndex) {
            setPositionGifs({
                300: 1,
                600: 2,
                1100: 3,
                1300: 4,
            });
        } else {
            setPositionGifs({
                300: 1,
                550: 2,
                800: 3,
                1100: 4,
                1300: 5,
            });
        }
    }, [fromIndex]);


    return (
        <ResponsiveMasonry columnsCountBreakPoints={positionGifs}>
            <Masonry>
                {
                    gifs.map(({ id, title, url }, index) => {
                        return <Gif title={title} id={id} url={url} key={index} />
                    })
                }
            </Masonry>
        </ResponsiveMasonry>
    )

    // <Masonry columns={{ xs: 1, md: 3, xl: 4 }} spacing={2}>
    //     {
    //         gifs.map(({ id, title, url }, index) => {
    //             return <Gif title={title} id={id} url={url} key={index} />
    //         })
    //     }
    // </Masonry>


    // return (
    //     <ImageList variant='masonry' cols={4} gap={8}>
    //         {
    //             gifs.map(({ id, title, url }) =>
    //                 <Gif title={title} id={id} url={url} key={id} />
    //             )
    //         }
    //     </ImageList>
    // )
    // return <div className='ListOfGifs'>
    //     {
    //         gifs.map(({ id, title, url }) =>
    //             <Gif title={title} id={id} url={url} key={id} />
    //         )
    //     }
    // </div>
}

export default ListOfGifs