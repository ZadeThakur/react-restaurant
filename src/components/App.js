import React from "react";
import Routes from "../routes";
import "../css/app.css";
import { withStyles } from "@material-ui/core/styles";

const styles = theme =>({
  routesDiv:{
    height:"100%",
    postion:"relative"
  }
});

const App = (props) => {
  const { classes } = props
    return(
      <div className={classes.routesDiv}>
      <Routes />
      </div>
    );
  };

export default withStyles(styles)(App);
