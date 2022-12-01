// import axios from "axios";
// import { Buffer } from "buffer";
// import { useEffect, useState } from "react";
// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism.css";

// export default function App() {
//   const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
//   let [code64, setCode64] = useState("");
//   const [encoded, setEncoded] = useState(false);
//   let [decoded, setDecode64] = useState("");
//   const [token, setToken] = useState("");
//   const [result, setResult] = useState("");

//   // useEffect(() => {
//   //   getCode();
//   //   console.log(decoded);
//   // }, [code64]);

//   function encode() {
//     const encoded = Buffer.from(code, "utf8").toString("base64");
//     setCode64(encoded);
//     getToken();
//     return setEncoded(true);
//   }

//   function getToken() {
//     const options = {
//       method: "POST",
//       url: "https://codeexec.p.rapidapi.com/submission",
//       headers: {
//         "content-type": "application/json",
//         "X-RapidAPI-Key": "238f019ceamsh555090a8d52cec6p1178e5jsn2e7cd458b6c3",
//         "X-RapidAPI-Host": "codeexec.p.rapidapi.com",
//       },
//       data: `{"source_code":${code64},"language_id":7,"tasks":[{"stdin":""}]}}`,
//     };

//     axios
//       .request(options)
//       .then(function (response) {
//         let token = JSON.stringify(response.data.token);
//         setToken(token);
//         return console.log(token);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   }

//   // function getCode () {
//   //   const axios = require("axios");

//   //   const options = {
//   //     method: "GET",
//   //     url: `https://codeexec.p.rapidapi.com/submission/${token}`,
//   //     headers: {
//   //       "X-RapidAPI-Key": "238f019ceamsh555090a8d52cec6p1178e5jsn2e7cd458b6c3",
//   //       "X-RapidAPI-Host": "codeexec.p.rapidapi.com",
//   //     },
//   //   };

//   //   axios
//   //     .request(options)
//   //     .then(function (response: any) {
//   //       const result = JSON.parse(response.data)
//   //       return setResult(result);
//   //     })
//   //     .catch(function (error: any) {
//   //       console.error(error);
//   //     });
//   // }

//   return (
//     <div className="pt-20 container mx-auto min-h-96 w-auto bg-gray-700">
//       <Editor
//         value={code}
//         onValueChange={(code) => setCode(code)}
//         highlight={(code) => highlight(code, languages.js, "js")}
//         padding={10}
//         style={{
//           fontFamily: '"Fira code", "Fira Mono", monospace',
//           fontSize: 22,
//         }}
//       />
//       <button onClick={() => encode()}>Encode</button>
//     </div>
//   );
// }
