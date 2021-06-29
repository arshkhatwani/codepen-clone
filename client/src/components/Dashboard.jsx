import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import url from "../serverInfo";
import axios from "axios";

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

    setTopHeading("Dashboard");
  }, []);

  // var codePosts = [
  //   {
  //     title: "Stackoverflow",
  //     pid: "asdas",
  //     desc: "maybe, not quite sure maybe, not quite sure maybe, not quite sure maybe, not quite sure",
  //   },
  //   {
  //     title: "Facebook",
  //     pid: "asdtytyyas",
  //     desc: "maybe, not quite sure",
  //   },
  //   {
  //     title: "Instagram",
  //     pid: "asdwewewas",
  //     desc: "maybe, not quite sure",
  //   },
  //   {
  //     title: "Twitter",
  //     pid: "assssdas",
  //     desc: "maybe, not quite sure",
  //   },
  // ];

  return (
    <>
      <Container style={{ margin: "10px 0" }}>
        <Link to="/editor/newcode" className={classes.linkStyle}>
          <Button variant="outlined" color="primary">Write Code <b>&nbsp;{"</>"}</b></Button>
        </Link>
      </Container>
      <Container>
        {codePosts.map((item, index) => {
          return (
            <Card key={index} className={classes.cardContent}>
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography paragraph>{item.desc}</Typography>
                <Button variant="contained" color="primary">
                  View
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </>
  );
}
