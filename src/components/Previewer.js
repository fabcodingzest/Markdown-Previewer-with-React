import React from "react";
import marked from "marked";

marked.setOptions({
  // breaks: true
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Previewer = (props) => {
  return (
    <div
      className="prose-sm bg-white mt-2 w-full md:w-1/2 rounded break-words min-h-3/4 m-0 md:m-2 md:my-4 border border-2 p-2"
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer })
      }}
    />
  );
};

export default Previewer;
