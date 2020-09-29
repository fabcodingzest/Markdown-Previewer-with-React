import React, { useState } from 'react';
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

const App = () => {
  const [md, setMd] = useState("");
  const handleOnChange = (e) => {
    let input = e.target.value;
    setMd(input);
  };
  return (
    <div className="min-h-screen w-screen bg-black flex justify-center items-center flex-col">
      <Editor onChange={handleOnChange} markdown={md} />
      <Previewer markdown={md} />
      <h1 className="text-white"> uhvfirfgy </h1>
    </div>
  );
};

export default App;
