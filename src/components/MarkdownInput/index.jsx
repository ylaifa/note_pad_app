import React, { useState, useEffect } from "react";
import NoteDisplay from "components/NoteDisplay";

const MarkdownInput = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);
  console.log(notes);
  useEffect(() => {
    console.log("Component is Update");
  }, []);

  const changeContent = e => {
    setContent(e.target.value);
  };

  const changeTitle = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (content === "" || title === "") {
      console.log("empty");
    } else {
      localStorage.setItem(title, content);
      const i = localStorage.length;
      const newNote = [
        {
          id: i,
          title: title,
          description: content
        }
      ];
      setNotes([...notes, newNote]);
    }
  };

  return (
    <>
      <NoteDisplay content={content} title={title} />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="text"
              name={title}
              onChange={changeTitle}
              placeholder="Enter title"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="textarea"
              name={content}
              onChange={changeContent}
              placeholder="Enter content"
            />
          </label>
        </div>

        <input type="submit" content="Save me" />
      </form>
      <h1>My notes :</h1>
      {notes.map((note, key) => (
        <div key={key}>
          <div>
            {note.map(n => (
              <div>
                <h3>Title :</h3> {n.title}
                <h3>Content :</h3> {n.description}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
export default MarkdownInput;
