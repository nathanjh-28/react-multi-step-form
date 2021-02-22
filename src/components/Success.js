import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export class Success extends Component {

    continue = e => {
        e.preventDefault();
        // process form
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        return (
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar >
                        <Typography variant="h6" display="flex" justifyContent="center" alignItems="center">
                            Success!
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container maxWidth='sm'>

                    <Box display="flex" flexDirection="column" justifyContent="center">
                        <Typography variant="h2">
                            Thank You for your submission
                        </Typography>
                        <Typography variant="p">
                            You will get an email with further instructions
                        </Typography>
                    </Box>
                </Container>

            </ThemeProvider>
        )
    }
}

export default Success
