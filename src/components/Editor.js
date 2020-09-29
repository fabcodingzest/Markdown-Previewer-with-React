import React from "react";

const Editor = (props) => {
  return (
    <textarea
      className="w-1/2 min-h-3/4 h-full text-md my-4 rounded border border-2 resize-none p-2"
      type="text"
      onChange={props.onChange}
      value={props.markdown}
    />
  );
};

export default Editor;
