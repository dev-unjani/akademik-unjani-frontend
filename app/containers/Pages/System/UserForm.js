import React,{Component} from 'react';
import { Grid, TextField, FormControl, InputLabel, Input } from '@material-ui/core';

const UserForm = (props) => {
    return(
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>   
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nama"
                type="email"
                fullwidth
                onChange={props.handleChange}
                value={props.name}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullwidth
                    onChange={props.handleChange}
                    value={props.email}
                />
            </Grid>
        </Grid>
    )
}

export default UserForm;