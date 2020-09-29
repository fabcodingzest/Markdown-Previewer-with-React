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
      className="bg-white mt-2 h-64 w-64 text-red-900"
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer })
      }}
    />
  );
};

export default Previewer;
