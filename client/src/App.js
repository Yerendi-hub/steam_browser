import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import steamEngine from "./images/steamEngine.png";
import Games from "./components/Games/Games";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography  className={classes.heading} variant="h2" algin="center">
          {" "}
          Steam Engine
        </Typography>
        <img  className={classes.image} src={steamEngine} alt="steam engine" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Games />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
