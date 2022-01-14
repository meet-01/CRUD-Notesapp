import React, { useState } from "react";
export default function Sidebar({
  notes,
  onAddNotes,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  // const compareFunction = (a, b) => b?.lastModified - a?.lastModified;
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNotes}>Add</button>
      </div>
      <div className="app-side-notes">
        {notes.map(({ title, body, lastModified, id }) => (
          <div
            key={id}
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button
                className={` ${id === activeNote && "delete__btn"}`}
                onClick={() => onDeleteNote(id)}
              >
                DELETE
              </button>
            </div>
            <p>{body ? `${body.substr(0, 50)}... ` : "Add content"}</p>
            <small className="note-meta">Last Modified: {lastModified}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
