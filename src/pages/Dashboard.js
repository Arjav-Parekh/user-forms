import React from 'react'
import {Grid} from '@material-ui/core'
import Container from '../components/Container'
import {makeStyles, withStyles} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import Button from '../components/Button';
import IconButton from '@material-ui/core/IconButton';
import Table from '../components/Table.js'


const useStyles = makeStyles((theme) => ({
    root:{
        fontFamily:'Poppins',
        "&$checked": {
            color: "#1976D2",
            fontFamily:'Poppins',
        },
        maxHeight: '50px',
        marginTop: '-50px'
    },
    card:{
        boxShadow:'5px 5px 18px rgb(197, 197, 197)',
        borderRadius:'10px',
        padding: '35px 35px 35px 35px',
        textAlign:'left'
    
    },
    bold:{
        fontWeight: '700',
        fontFamily: 'Poppins',
        textAlign: 'left',
        fontSize:'1.3rem'
    },
    normal:{
        fontFamily:'Poppins',
        
    },
    title:{
        marginLeft: '4px',
        marginBottom: '30px',
        fontFamily: 'Poppins',
        fontWeight: '700',
    },
  
}))

function Dashboard() {
    const classes = useStyles();

    
    return (
        <>
            <Container spacing={'90%'} className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item md={3}>
                        <div className={classes.card} >
                            <h5 className={classes.bold}>150</h5>
                         
                            <hr/>
                            <br/>
                            <h6 className={classes.normal}>NO. OF STAFF AVAILABLE</h6>
                        </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className={classes.card} >
                        <h5 className={classes.bold}>150</h5>
                        <hr/>
                        <br/>
                        <h6 className={classes.normal}>NO. OF STAFF AVAILABLE</h6>
                        </div>
                    </Grid>
                    <Grid item md={3}>
                    <div className={classes.card} >
                            <h5 className={classes.bold}>150</h5>
                            <hr/>
                            <br/>
                            <h6 className={classes.normal}>NO. OF STAFF AVAILABLE</h6>
                        </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className={classes.card} >
                            <h5 className={classes.bold}>150</h5>
                            <hr/>
                            <br/>
                            <h6 className={classes.normal}>NO. OF STAFF AVAILABLE</h6>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Container spacing={'90%'} className={classes.root}>
            <h2 className={classes.title}>HOSPITAL</h2>
                <div className={classes.card}>
                    <h5 className={classes.bold}>People Late Today</h5>
                    <hr/>
                    <Table/>
                </div>
            </Container>
            <Container spacing={'90%'} className={classes.root}   marginTop={'2%'}>
                <div className={classes.card}>
                    <h5 className={classes.bold}>People Left Early</h5>
                    <hr/>
                    <Table/>
                </div>
            </Container>
        </>
    )
}

export default Dashboard