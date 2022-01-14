import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
export default function Main({ activeNote, onUpdateNote }) {
  const onEdit = (key, value) => {
    onUpdateNote({
      id: activeNote.id,
      title: key === "title" ? value : activeNote?.title,
      body: key === "body" ? value : activeNote?.body,
      lastModified: new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      }),
    });
  };

  if (!activeNote)
    return <div className="no-active-note">No note selected</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          autoFocus
          value={activeNote?.title}
          onChange={(e) => onEdit("title", e.target.value)}
        />
        <textarea
          id="body"
          placeholder="write your note here.."
          value={activeNote?.body}
          onChange={(e) => onEdit("body", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote?.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote?.body}
        </ReactMarkdown>
      </div>
    </div>
  );
}
