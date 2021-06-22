import { Container, Typography, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import OutputWindow from "./OutputWindow";

function onChange(newValue) {
  console.log("change", newValue);
}

const useStyles = makeStyles((theme) => ({
  containerContent: {
    flexGrow: 1,
    padding: theme.spacing(0),
    background: "yellow",
  },
  editor: {
    height: "100%",
    width: "100%",
  },
  test: {
    padding: "0 5px",
  },
  codeContainer: {
    backgroundColor: "yellow",
    padding: theme.spacing(0),
    marginTop: theme.spacing(1),
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    // justifyContent:"flex-start",
    // alignItems: "flex-start"
  },
}));

export default function CodeEditor(props) {
  const { topHeading, setTopHeading } = props;

  const classes = useStyles();

  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  useEffect(() => {
    setTopHeading("Edit Code");
  }, []);

  return (
    <>
      <Container disableGutters={true} className={classes.codeContainer}>
        <Container className={classes.test}>
          <Typography variant="h5" className={classes.tabHeading}>
            HTML
          </Typography>
          <CodeMirror
            value={htmlCode}
            options={{
              mode: "xml",
              theme: "material",
              lineNumbers: true,
              lineWrapping: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setHtmlCode(value);
            }}
          />
        </Container>
        <Container className={classes.test}>
          <Typography variant="h5" className={classes.tabHeading}>
            CSS
          </Typography>
          <CodeMirror
            value={cssCode}
            options={{
              mode: "css",
              theme: "material",
              lineNumbers: true,
              lineWrapping: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setCssCode(value);
            }}
          />
        </Container>
        <Container className={classes.test}>
          <Typography variant="h5" className={classes.tabHeading}>
            JS
          </Typography>
          <CodeMirror
            value={jsCode}
            options={{
              mode: "javascript",
              theme: "material",
              lineNumbers: true,
              lineWrapping: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setJsCode(value);
            }}
          />
        </Container>
      </Container>
      <Container disableGutters={true}>
      {/* put maximise option here */}
      <OutputWindow htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode}/>
      </Container>
    </>
    // <Grid
    //   container
    //   alignItems="flex-start"
    //   justify="flex-start"
    //   spacing="5"
    //   wrap="nowrap"
    //   md={12}
    //   className={classes.containerContent}
    // >
    //   <Grid item xs={3}>
    //     <AceEditor
    //       className={classes.editor}
    //       value={htmlCode}
    //       mode="html"
    //       theme="monokai"
    //       onChange={(value) => {
    //         setHtmlCode(value);
    //       }}
    //       name="htmlEditor"
    //       editorProps={{ $blockScrolling: true }}
    //       setOptions={{
    //         enableBasicAutocompletion: false,
    //         enableLiveAutocompletion: false,
    //         enableSnippets: false,
    //         showLineNumbers: true,
    //         tabSize: 2,
    //       }}
    //     />
    //   </Grid>
    //   <Grid item xs={3}>
    //     <AceEditor
    //       className={classes.editor}
    //       value={cssCode}
    //       mode="css"
    //       theme="monokai"
    //       onChange={(value) => {
    //         setCssCode(value);
    //       }}
    //       name="cssEditor"
    //       editorProps={{ $blockScrolling: true }}
    //       setOptions={{
    //         enableBasicAutocompletion: false,
    //         enableLiveAutocompletion: false,
    //         enableSnippets: false,
    //         showLineNumbers: true,
    //         tabSize: 2,
    //       }}
    //     />
    //   </Grid>
    //   <Grid item xs={3}>
    //     <AceEditor
    //       className={classes.editor}
    //       value={jsCode}
    //       mode="javascript"
    //       theme="monokai"
    //       onChange={(value) => {
    //         setJsCode(value);
    //       }}
    //       name="jsEditor"
    //       editorProps={{ $blockScrolling: true }}
    //       setOptions={{
    //         enableBasicAutocompletion: false,
    //         enableLiveAutocompletion: false,
    //         enableSnippets: false,
    //         showLineNumbers: true,
    //         tabSize: 2,
    //       }}
    //     />
    //   </Grid>
    // </Grid>
  );
}
