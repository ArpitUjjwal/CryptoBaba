import {Container, makeStyles, Typography } from '@material-ui/core'
import Carousel from "./Carousel";
import React from 'react'

const useStyles=makeStyles(() => ({
    banner: {
        backgroundImage: "url(./image.jpg)",
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
      },
      tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      },
      carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
      },
}));

const Banner = () => {

    const classes = useStyles();

    return (
        <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              textShadow: "0 0 5px #00e6e6",
            }}
          >
            CryptoBaba
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#fff",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              textShadow: "0 0 4px #000",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
    )
}

export default Banner
