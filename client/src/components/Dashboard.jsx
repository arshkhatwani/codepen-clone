import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  makeStyles,
} from "@material-ui/core";
import url from "../serverInfo";
const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  containerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  cardContent: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
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
  } = props;

  // Fetching user data from server
  useEffect(() => {
    axios
      .get(url + "/getdata/user/profile", {
        headers: {
          auth: "bearer " + authToken,
        },
      })
      .then((res) => {
        // console.log(res);
        setSidebarHeading(res.data.user.name);
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

  var codePosts = [
    {
      title: "Stackoverflow",
      pid: "asdas",
      desc: "maybe, not quite sure maybe, not quite sure maybe, not quite sure maybe, not quite sure",
    },
    {
      title: "Facebook",
      pid: "asdtytyyas",
      desc: "maybe, not quite sure",
    },
    {
      title: "Instagram",
      pid: "asdwewewas",
      desc: "maybe, not quite sure",
    },
    {
      title: "Twitter",
      pid: "assssdas",
      desc: "maybe, not quite sure",
    },
  ];

  return (
    <Container>
      {codePosts.map((item, index) => {
        return (
          <Card className={classes.cardContent}>
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
  );
}
