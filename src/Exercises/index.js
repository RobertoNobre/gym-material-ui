import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Delete, Edit } from '@material-ui/icons';
import Form from './Form';

const styles = {
    Paper : { padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto' }
}

export default ({ 
        exercises, 
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
    })  =>
    <Grid container>
        <Grid item xs={12} sm={6}>
            <Paper style={styles.Paper}>
                { exercises.map(([group, exercises]) => 
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
        <Grid item xs={12} sm={6}>
            <Paper style={styles.Paper}>
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