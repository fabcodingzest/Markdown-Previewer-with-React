import React, { useState } from 'react';
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

const defaultMarkdown = `# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2 
### This is a Heading h3
#### This is a Heading h4
##### This is a Heading h5
###### This is a Heading h6


## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
  * Item 2a
  * Item 2b



### Ordered

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b


## Images

![This is a alt text.](/image/sample.png "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Inline code

This web site is using \`markedjs/marked\`.
`;

const App = () => {
  const [md, setMd] = useState(defaultMarkdown);
  const handleOnChange = (e) => {
    let input = e.target.value;
    setMd(input);
  };
  return (
    <div className="max-w-4xl mx-auto min-h-screen h-screen w-screen bg-black">
      <p className="text-white text-center text-lg md:text-4xl font-bold">Markdown Live Previewer</p>
      <div className="bg-white p-4 flex flex-col min-h-2/4 md:flex-row justify-center items-start rounded mx-2">
      <Editor onChange={handleOnChange} markdown={md} />
      <Previewer markdown={md} />
      </div>
    </div>
  );
};

export default App;
