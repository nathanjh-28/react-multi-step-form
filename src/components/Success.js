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
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Success!
                        </Typography>

                    </Toolbar>
                </AppBar>
                <Typography variant="h2">
                    Thank You for your submission
                        </Typography>
                <Typography variant="p">
                    You will get an email with further instructions
                        </Typography>

            </ThemeProvider>
        )
    }
}

export default Success
