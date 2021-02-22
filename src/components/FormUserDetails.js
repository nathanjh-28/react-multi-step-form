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

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
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
                            hinttext="Enter Your First Name"
                            label="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                        />
                        <br />
                        <TextField
                            hinttext="Enter Your Last Name"
                            label="Last Name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                        />
                        <br />
                        <TextField
                            hinttext="Enter Your Email"
                            label="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                        />
                        <br />
                        <ButtonGroup>
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

            </ThemeProvider>
        )
    }
}

export default FormUserDetails
