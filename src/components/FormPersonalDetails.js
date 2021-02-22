import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'


import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
        h2: {
            fontSize: 36,
            marginBottom: 15,
        }
    }
})

export class FormUserPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Enter Personal Details
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField
                    hinttext="Enter Your Occupation"
                    label="Occupation"
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation}
                />
                <br />
                <TextField
                    hinttext="Enter Your City"
                    label="City"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                />
                <br />
                <TextField
                    hinttext="Enter Your Bio"
                    label="Bio"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                />
                <br />
                <Button
                    variant="contained"
                    label="Previous"
                    color='secondary'
                    onClick={this.back}
                >Previous</Button>
                <Button
                    variant="contained"
                    label="Continue"
                    color='primary'
                    onClick={this.continue}
                >Continue</Button>


                {/* <TextField
                        hinttext="Enter your first name"
                        floatinglabeltext="First Name"
                        onChange={handleChange('firstName')}

                    /> */}

            </ThemeProvider>
        )
    }
}

export default FormUserPersonalDetails
