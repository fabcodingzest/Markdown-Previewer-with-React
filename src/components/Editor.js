import React from "react";

const Editor = (props) => {
  return (
    <textarea
      className="w-full md:w-1/2 text-md my-4 rounded border border-2 resize-none p-2"
      type="text"
      onChange={props.onChange}
      value={props.markdown}
    />
  );
};

export default Editor;
