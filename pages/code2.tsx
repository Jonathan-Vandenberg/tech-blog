import axios from "axios";
import { Buffer } from "buffer";
import { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

export default function App() {
  // let [decoded, setDecode64] = useState("");
  // let [dummy, setDummy] = useState("");
  let [finalResult, setFinalResult] = useState({});
  let [encoded, setEncoded] = useState(false);
  let [code, setCode] = useState(`print("Hello, " + input() + "!")`);
  let [code64, setCode64] = useState("");
  let [token, setToken] = useState("");
  let [result, setResult] = useState("");
  let [task, setTask] = useState("");
  let [tokenCode64, setTokenCode64] = useState("");

  // useEffect(() => {
  //   getCode();
  //   console.log(decoded);
  // }, [code64]);

  function encode() {
    const encodeSourceCode = async () => {
      let encoded = Buffer.from(code, "utf8").toString("base64");
      return setCode64(encoded);
    };

    const encodeTask = async () => {
      let encodedToken = Buffer.from(token, "utf8").toString("base64");
      return setTokenCode64(encodedToken);
    };

    encodeSourceCode();
    encodeTask();

    setTimeout(() => getToken(), 2000);
    return setEncoded(true);
  }

  function getToken() {
    let options = {
      method: "POST",
      url: "https://codeexec.p.rapidapi.com/submission",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "238f019ceamsh555090a8d52cec6p1178e5jsn2e7cd458b6c3",
        "X-RapidAPI-Host": "codeexec.p.rapidapi.com",
      },
      data: `{"source_code":"${code64}","language_id":3,"tasks":[{"stdin":"${tokenCode64}"}]}`,
    };

    axios
      .request(options)
      .then(function (response) {
        let token = response.data.token;
        setToken(token);
        console.log(response);
        console.log(token);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function getCode() {
    let options = {
      method: "GET",
      url: `https://codeexec.p.rapidapi.com/submission/${token}`,
      headers: {
        "X-RapidAPI-Key": "238f019ceamsh555090a8d52cec6p1178e5jsn2e7cd458b6c3",
        "X-RapidAPI-Host": "codeexec.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response: any) {
        let r = response.data.tasks[0].token;
        setResult(r);
        console.log(response);
        console.log(r);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }

  function getResult() {
    let options = {
      method: "GET",
      url: `https://codeexec.p.rapidapi.com/task/${result}`,
      headers: {
        "X-RapidAPI-Key": "238f019ceamsh555090a8d52cec6p1178e5jsn2e7cd458b6c3",
        "X-RapidAPI-Host": "codeexec.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response: any) {
        let finalResult = response.data;
        setFinalResult(finalResult);
        console.log(response);
        console.log(finalResult);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log(
    `source-code: ${Buffer.from(
      "cHJpbnQoIkhlbGxvLCAiICsgaW5wdXQoKSArICIhIikK",
      "base64"
    ).toString("utf8")}`
  );
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log(`task: ${Buffer.from("V29ybGQK", "base64").toString("utf8")}`);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log(`task: ${task}`);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  // V29ybGQK

  return (
    <div className="pt-20 container mx-auto min-h-96 w-auto bg-gray-700">
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.javascript, "js")}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 22,
        }}
      />
      {/* <div>{result}</div> */}
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <div className="flex flex-col space-y-3 items-center justify-center">
        <button onClick={() => encode()}>Encode</button>
        <button onClick={() => getCode()}>getCODE</button>
        <button onClick={() => getResult()}>ReSuLt...</button>
      </div>
    </div>
  );
}
