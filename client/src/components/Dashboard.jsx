import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

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

  const { topHeading, setTopHeading } = props;

  useEffect(() => {
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
              <Button
                variant="contained"
                color="primary"
              >
                View
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
}
