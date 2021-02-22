import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

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
                    <Toolbar >
                        <Typography variant="h6" display="flex" justifyContent="center" alignItems="center">
                            Enter User Details
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container maxWidth='sm'>

                    <Box display="flex" flexDirection="column" justifyContent="center">
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

                        <ButtonGroup>
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


                        </ButtonGroup>
                    </Box>
                </Container>


                {/* <TextField
                        hinttext="Enter your first name"
                        floatinglabeltext="First Name"
                        onChange={handleChange('firstName')}

                    /> */}

            </ThemeProvider >
        )
    }
}

export default FormUserPersonalDetails
