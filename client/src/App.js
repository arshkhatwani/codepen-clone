import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor";
import Home from "./components/Home";
import {
  makeStyles,
  Container,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";


const theme = createMuiTheme({
  palette:{
    primary: {
      main: "#1976d2",
      light: "#4791db",
      dark: "#115293"
    }
  }
})

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    fontSize: "1rem",
  },
  bgClass: {
    backgroundColor: "yellow",
  },
  containerContent: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [topHeading, setTopHeading] = useState("Codepen")

  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Navbar isAuth={isAuth} topHeading={topHeading} />
          <main className={classes.content}>
            <div className={classes.toolbar}></div>
            <Container
              maxWidth="md"
              disableGutters={true}
              className={classes.containerContent}
            >
              <Switch>
                <Route exact path="/">
                  <Home isAuth={isAuth} setIsAuth={setIsAuth} topHeading={topHeading} setTopHeading={setTopHeading} />
                </Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/editor">
                  <CodeEditor topHeading={topHeading} setTopHeading={setTopHeading} />
                </Route>
                <Route>
                  <h1>404 Not found</h1>
                </Route>
              </Switch>
            </Container>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
