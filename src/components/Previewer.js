import React from "react";
import marked from "marked";

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Previewer = (props) => {
  return (
    <div
      className="bg-white mt-2 w-1/2 rounded break-word min-h-3/4 m-0 md:m-2 md:my-4 text-red-900 border border-2 p-2"
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer })
      }}
    />
  );
};

export default Previewer;
