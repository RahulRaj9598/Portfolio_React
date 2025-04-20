import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className="bg-purple-600 text-transparent bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;