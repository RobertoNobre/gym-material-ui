import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Delete, Edit } from '@material-ui/icons';
import Form from './Form';
import { withStyles } from '@material-ui/core/styles';
import { withContext } from './../context';

const styles = theme => ({
    paper : { 
        padding: theme.spacing.unit * 3, 
        [theme.breakpoints.up('sm')]:{
            marginTop: 5,
            height: 'calc(100% - 10px)', 
        },
        [theme.breakpoints.down('xs')]:{
            height: '100%', 
        },
        overflowY: 'auto' 
    },
    '@global': {
        'html, body, #root': {
            height: '100%'
        }
    },
    container: {
        [theme.breakpoints.up('sm')]:{
            height: 'calc(100% - 64px - 48px)',
        },
        [theme.breakpoints.down('xs')]:{
            height: 'calc(100% - 56px - 48px)',
        }
    },
    item: {
        [theme.breakpoints.down('xs')]:{
            height: '50%',
        }
    }
})

const Exercises = (({ 
        classes,
        exercisesByMuscle, 
        category, 
        editMode,
        onSelect, 
        muscles,
        exercise,
        exercise: {
            id, 
            title = 'Welcome', 
            description = 'Please select an exercise from the list on the left.'
        },
        onDelete,
        onSelectEdit,
        onEdit
    }) =>
    <Grid container className={classes.container}>
        <Grid className={classes.item} xs={12} sm={6}>
            <Paper className={classes.paper}>
                { exercisesByMuscle.map(([group, exercises]) => 
                    !category || category === group
                        ?   <Fragment key={group}>
                                <Typography
                                    color='secondary'
                                    variant="headline"
                                    style={{textTransform: 'capitalize'}}
                                >
                                    {group}
                                </Typography>
                                <List component="ul">
                                    {exercises.map(({id, title}) => 
                                        <ListItem 
                                            button 
                                            key={id}
                                            onClick={()=> onSelect(id)}
                                        >
                                            <ListItemText primary={title} />
                                            <ListItemSecondaryAction >
                                                <IconButton color='primary' onClick={() => onSelectEdit(id)}>
                                                    <Edit/>
                                                </IconButton>
                                
                                                <IconButton color='primary' onClick={() => onDelete(id)}>
                                                    <Delete/>
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )}
                                </List>
                            </Fragment>
                        : null
                )}
            </Paper>
        </Grid>
        <Grid className={classes.item} xs={12} sm={6}>
            <Paper className={classes.paper}>
                    <Typography
                        color='secondary'
                        variant="display1"
                        gutterBottom
                    >
                    { title } 
                    </Typography>   
                {editMode 
                ? <Form
                        exercise={exercise}
                        muscles={muscles}
                        onSubmit={onEdit}    
                    />
                : 
                    <Typography
                        variant="headline"
                    >
                        { description }
                    </Typography>}
            </Paper>
        </Grid>
    </Grid>
)
export default withContext(withStyles(styles)(Exercises))