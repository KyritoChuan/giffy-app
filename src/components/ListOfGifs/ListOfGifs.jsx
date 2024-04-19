import Gif from '../Gif'

import './ListOfGifs.css';

function ListOfGifs({ gifs }) {
    return <div className='ListOfGifs'>
        {
            gifs.map(({ id, title, url }) =>
                <Gif title={title} id={id} url={url} key={id} />
            )
        }
    </div>
}

export default ListOfGifs