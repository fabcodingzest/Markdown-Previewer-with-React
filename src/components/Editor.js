import React from "react";

const Editor = (props) => {
  return (
    <textarea
      rows="20"
      cols="50"
      type="text"
      onChange={props.onChange}
      value={props.markdown}
    />
  );
};

export default Editor;
