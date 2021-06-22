import React, { useEffect } from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerCont: {
    marginTop: theme.spacing(1),
    // backgroundColor:"yellow"
  },
}));

export default function OutputWindow(props) {
  const classes = useStyles();
  const { htmlCode, cssCode, jsCode } = props;

  var srcDoc = `
    <html>
        <body>
        ${htmlCode}
        </body>
        <style>${cssCode}</style>
        <script>${jsCode}</script>
    </html>
    `;

  return (
    <>
      <Container disableGutters={true} className={classes.containerCont}>
        <iframe
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
          width="100%"
        ></iframe>
      </Container>
    </>
  );
}
