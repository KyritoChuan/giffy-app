import { Link } from 'wouter';

import './Category.css'
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

export default function Category({ name, options = [], ...props }) {
    return <div className={props.className}>
        <h3 className="Category-title">{name}</h3>

        {options.map((singleOption) => (
            <div key={singleOption}>
                <Link
                    className="Category-link"
                    to={`/search/${singleOption}`}
                >
                    {singleOption}
                </Link>
            </div>
        ))}
    </div>
}