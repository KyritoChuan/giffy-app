import { Link } from 'wouter';
import './Gif.css';
import { ImageListItem, ImageListItemBar } from '@mui/material';

export default function Gif({ title, id, url }) {
    return (
        // <div className='Gif'>
        // <Grid item xs={12} sm={6} md={3} xl={2.4}>
        <ImageListItem sx={{ margin: "8px" }}>
            <Link to={`/gif/${id}`}>
                {/* className="Gif-link" */}
                <img loading='lazy' alt={title}
                    src={`${url}?w=248&fit=crop&auto=format`}
                    width={"100%"}
                    srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                />
                <ImageListItemBar
                    title={title}
                    subtitle={title}
                    sx={{ width: "100%" }}
                />
            </Link>
        </ImageListItem>
        /* </Grid > */
        /* </div> */
    )
}
