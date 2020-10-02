import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <EmojiPeopleIcon />
                        Roasts&Boasts
                        </IconButton>

                    </Typography>
                    <ul className="Navigation">
                        <li><Link to="/posts">All Post</Link></li>
                        <li><Link to="/roasts">Roasts</Link></li>
                        <li><Link to="/boasts">Boasts</Link></li>
                        <li><Link to="/popular">Most Popular</Link></li>
                        <li><Link to="/createpost">Create Post</Link></li>
                  
                    </ul>


                </Toolbar>
            </AppBar>
        </div>
    );
}
