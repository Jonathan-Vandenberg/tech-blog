import axios from "axios";
import { Buffer } from "buffer";
import { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

export default function App() {
  let [code, setCode] = useState(`function add(a,b){
return a+b;}

console.log(add(2, input()))`);
  let [code64, setCode64] = useState("");
  let [encoded, setEncoded] = useState(false);
  let [decoded, setDecode64] = useState("");
  let [token, setToken] = useState("");
  let [result, setResult] = useState("");
  let [dummy, setDummy] = useState("");
  let [finalResult, setFinalResult] = useState({});

  // useEffect(() => {
  //   getCode();
  //   console.log(decoded);
  // }, [code64]);

  function encode() {
    let encoded = Buffer.from(code, "utf8").toString("base64");
    console.log(encoded);
    setCode64(encoded);
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
      data: `{"source_code":"ZnVuY3Rpb24gYWRkKGEsYil7CnJldHVybiBhK2I7fQpjb25zb2xlLmxvZyhhZGQoMiwgaW5wdXQoKSkp","language_id":7,"tasks":[{"stdin":"MTAw"}]}`,
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
  // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  // console.log(
  //   `Test stdin: ${Buffer.from(
  //     "ZnVuY3Rpb24gYWRkKGEsYil7CnJldHVybiBhK2I7fQoKY29uc29sZS5sb2coYWRkKDIsIGlucHV0KCkpKQ==",
  //     "base64"
  //   ).toString("utf8")}`
  // );
  // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  return (
    <div className="pt-20 container mx-auto min-h-96 w-auto bg-gray-700">
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js, "js")}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 22,
        }}
      />
      {/* <div>{result}</div> */}
      <div className="flex flex-col space-y-3 items-center justify-center">
        <button onClick={() => encode()}>Encode</button>
        <button onClick={() => getCode()}>getCODE</button>
        <button onClick={() => getResult()}>ReSuLt...</button>
      </div>
    </div>
  );
}
