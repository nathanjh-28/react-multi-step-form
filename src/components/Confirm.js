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

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'



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

export class FormUserDetails extends Component {

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
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar >
                        <Typography variant="h6" display="flex" justifyContent="center" alignItems="center">
                            Confirm
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container maxWidth='sm'>

                    <Box display="flex" flexDirection="column" justifyContent="center">
                        <List>


                            <ListItem><ListItemText primary="First Name" secondary={firstName}></ListItemText></ListItem>
                            <ListItem><ListItemText primary="Last Name" secondary={lastName}></ListItemText></ListItem>
                            <ListItem><ListItemText primary="Email" secondary={email}></ListItemText></ListItem>
                            <ListItem><ListItemText primary="Occupation" secondary={occupation}></ListItemText></ListItem>
                            <ListItem><ListItemText primary="City" secondary={city}></ListItemText></ListItem>
                            <ListItem><ListItemText primary="Bio" secondary={bio}></ListItemText></ListItem>


                        </List>

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

            </ThemeProvider>
        )
    }
}

export default FormUserDetails
