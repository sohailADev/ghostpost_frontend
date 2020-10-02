import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    headingforpost: {
        color: 'red',
        fontSize: '50px'
    }
});


export default function Welcome(props) {
    const classes = useStyles()

    return <div> <h1 className={classes.headingforpost}>Welcome to {props.name}</h1></div>;
}
