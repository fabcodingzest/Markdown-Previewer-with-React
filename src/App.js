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
    <div className="max-w-4xl mx-auto min-h-screen h-screen w-screen bg-black">
      <h1 className="text-2xl text-white text-center">Markdown Live Previewer</h1>
      <div className="bg-white p-4 flex flex-col min-h-3/4 md:flex-row justify-center items-start rounded">
      <Editor onChange={handleOnChange} markdown={md} />
      <Previewer markdown={md} />
      </div>
    </div>
  );
};

export default App;
