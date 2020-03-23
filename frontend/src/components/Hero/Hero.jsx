import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  wrapper: {
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "80vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  overlay: {
    backgroundColor: "white",
    opacity: "0.7",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%"
  },
  content: {
    zIndex: "10"
  },
  heroButtons: {
    marginTop: "50px"
  }
}));
export const Hero = props => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper} style={{ backgroundImage: "url(" + props.image + ")" }}>
      <div className={classes.overlay} />
      <Container maxWidth="md" className={classes.content}>
        <div>
          {props.children}
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="left">
              {props.primaryButton ? (
                <Grid item>
                  <Button component={Link} to={props.primaryButton.link} variant="contained" color="primary">
                    {props.primaryButton.text}
                  </Button>
                </Grid>
              ) : null}
              {props.secondaryButton ? (
                <Grid item>
                  <Button component={Link} to={props.secondaryButton.link} variant="contained" color="secondary">
                    {props.secondaryButton.text}
                  </Button>
                </Grid>
              ) : null}
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};

// Hero.propTypes = {
//   linkOne: PropTypes.string,
//   linkTwo: PropTypes.string,
//   image: PropTypes.string,
//   children: PropTypes.children
// };
