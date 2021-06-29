import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import url from "../serverInfo";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  containerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  cardContent: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  linkStyle: {
    textDecoration: "none",
  },
  redBtn: {
    backgroundColor: "#e01b1b",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#960303",
    },
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();

  const {
    setTopHeading,
    authToken,
    setSidebarHeading,
    setAuthToken,
    setIsAuth,
    isAuth,
  } = props;

  const [codePosts, setCodePosts] = useState([]);

  // Fetching user data from server
  useEffect(() => {
    // Profile details
    axios
      .get(url + "/getdata/user/profile", {
        headers: {
          auth: "bearer " + authToken,
        },
      })
      .then((res) => {
        // console.log(res);
        setSidebarHeading(res.data.user.userName);
        setIsAuth(true);
      })
      .catch((e) => {
        var res = e.response;
        if (res.status === 403) {
          setAuthToken("");
          localStorage.removeItem("authToken");
          setIsAuth(false);
        }
      });

    // Saved codes
    axios
      .get(url + "/getdata/user/codes", {
        headers: {
          auth: "bearer " + authToken,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setCodePosts(res.data);
      })
      .catch((e) => {
        var res = e.response;
        if (res.status === 403) {
          setAuthToken("");
          localStorage.removeItem("authToken");
          setIsAuth(false);
        }
      });

    setTopHeading("Dashboard");
  }, []);

  return (
    <>
      <Container style={{ margin: "10px 0" }}>
        <Link to="/editor/newcode" className={classes.linkStyle}>
          <Button variant="outlined" color="primary">
            Write Code <b>&nbsp;{"</>"}</b>
          </Button>
        </Link>
      </Container>
      <Container>
        {codePosts.map((item, index) => {
          let d = new Date(item.postDate);
          let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
          let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
          let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
          return (
            <Card key={index} className={classes.cardContent}>
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography paragraph>{`${da}-${mo}-${ye}`}</Typography>
                <Box display="flex" justifyContent="flex-start">
                  <Link to={`/editor/code/${item.cid}`}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginRight: "10px" }}
                    >
                      View
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    className={classes.redBtn}
                    startIcon={<DeleteIcon />}
                    style={{ marginRight: "10px" }}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </>
  );
}
