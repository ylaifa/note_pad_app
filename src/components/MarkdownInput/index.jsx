import React, { useState, useEffect } from "react";

const MarkdownInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log("Component is Update");
  }, []);

  const changeContent = e => {
    setContent(e.target.content);
  };

  const changeTitle = e => {
    setTitle(e.target.content);
  };

  const saveForm = e => {
    e.preventDefault();

    if (content === "" || title === "") {
      console.log("not ok");
    } else {
      localStorage.setItem(title, content);
      const i = localStorage.length;
      const NewObject = [
        {
          id: i,
          title: title,
          description: content
        }
      ];
      console.log(NewObject);
      setNotes(notes.concat(NewObject));
    }
  };

  return (
    <>
      <form onSubmit={saveForm}>
        <label>
          <input
            type="text"
            name={content}
            onChange={changeContent}
            placeholder="write here.."
          />
        </label>

        <label>
          <input
            type="text"
            name={title}
            onChange={changeTitle}
            placeholder="title here.."
          />
        </label>

        <input type="submit" content="Save me" />
      </form>
    </>
  );
};
export default MarkdownInput;
