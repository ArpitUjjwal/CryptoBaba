import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "#00e6e6",
        fontFamily: "Montserrat",
        fontWeight: "bold", 
        cursor: "pointer",
    },
}));

const Header = () => {

    const classes = useStyles()
    const history = useHistory();

    const{ currency, setCurrency, symbol } = CryptoState()
    
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography onClick={() => history.push("/")} className={classes.title} variant='h6'>
                            CryptoBaba
                        </Typography>
                        <Select variant="outlined" style={{width: 100, height:40, marginRight: 15, color: "#00e6e6",}} value={currency} onChange={(e) => setCurrency(e.target.value)}>
                            <MenuItem value={"USD"}>{symbol} USD</MenuItem>
                            <MenuItem value={"INR"}>{symbol} INR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header
