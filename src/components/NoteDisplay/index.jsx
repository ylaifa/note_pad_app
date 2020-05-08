import React from "react";
import Showdown from "showdown";

const converter = new Showdown.Converter();

const NoteDisplay = ({ content, title }) => {
  console.log(content);
  console.log(title);

  const createMarkup = () => {
    return {
      __html: converter.makeHtml(content)
    };
  };

  return (
    <>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </>
  );
};
export default NoteDisplay;
