import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

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
    <Grid
      container
      alignItems="flex-start"
      justify="flex-start"
      spacing="5"
      wrap="nowrap"
      md={12}
      className={classes.containerContent}
    >
      <Grid item xs={3}>
        <AceEditor
          className={classes.editor}
          value={htmlCode}
          mode="html"
          theme="monokai"
          onChange={(value) => {
            setHtmlCode(value);
          }}
          name="htmlEditor"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <AceEditor
          className={classes.editor}
          value={cssCode}
          mode="css"
          theme="monokai"
          onChange={(value) => {
            setCssCode(value);
          }}
          name="cssEditor"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <AceEditor
          className={classes.editor}
          value={jsCode}
          mode="javascript"
          theme="monokai"
          onChange={(value) => {
            setJsCode(value);
          }}
          name="jsEditor"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </Grid>
    </Grid>
  );
}
