import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";
import { Card, CardActions, CardContent, Button } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Dashboard from "./Dashboard";

const useStyles = makeStyles((theme) => ({
  containerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    // backgroundColor: "yellow",
  },

  root: {
    // flex: "400 400",
    // maxWidth: 400,
    // maxHeight: 300,
    padding: theme.spacing(1.5),
  },

  cardContent: {
  },

  textField:{
      marginBottom: theme.spacing(2)
  },

  btn:{
      textAlign:"right"
  }
}));

export default function Home(props) {
  const { isAuth, setIsAuth, topHeading, setTopHeading } = props;

  const loginSubmit = (e) =>{
      e.preventDefault();
      setIsAuth(true);
  }

  const classes = useStyles();

  if (!isAuth) {
    return (
      <Container maxWidth="md" className={classes.containerContent}>
        <form onSubmit={loginSubmit}>
          <Card className={classes.root}>
            <CardContent className={classes.cardContent} display="flex">
              <Typography variant="h5" component="h5" className={classes.textField}>Login to start coding</Typography>
              <TextField required={true} id="email" label="Email" type="email" fullWidth className={classes.textField} />
              <TextField
                required={true}
                type="password"
                id="pass"
                label="Password"
                fullWidth
                className={classes.textField}
              />
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" type="submit" endIcon={<ArrowForwardIosIcon fontSize="inherit" />}>
                Login
              </Button>
            </CardActions>
          </Card>
        </form>
      </Container>
    );
  }

  return (
    <Dashboard topHeading={topHeading} setTopHeading={setTopHeading} />
  );
}
