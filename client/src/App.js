import React, { useState } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor";
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import {
  makeStyles,
  Container,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#4791db",
      dark: "#115293",
    },
  },
});

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
}));

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [topHeading, setTopHeading] = useState("Codepen");
  const [authToken, setAuthToken] = useState("");
  const [sidebarHeading, setSidebarHeading] = useState("Codehub");

  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Navbar
            isAuth={isAuth}
            setIsAuth={setIsAuth}
            topHeading={topHeading}
            sidebarHeading={sidebarHeading}
            setSidebarHeading={setSidebarHeading}
          />
          <main className={classes.content}>
            <div className={classes.toolbar}></div>
            <Container
              disableGutters={true}
              className={classes.containerContent}
            >
              <Switch>
                <Route exact path="/">
                  <Home
                    isAuth={isAuth}
                    setIsAuth={setIsAuth}
                    topHeading={topHeading}
                    setTopHeading={setTopHeading}
                    authToken={authToken}
                    setAuthToken={setAuthToken}
                    setSidebarHeading={setSidebarHeading}
                  />
                </Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/user/register">
                  <RegisterForm
                    topHeading={topHeading}
                    setTopHeading={setTopHeading}
                  />
                </Route>
                <Route exact path="/editor">
                  <CodeEditor
                    topHeading={topHeading}
                    setTopHeading={setTopHeading}
                  />
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
