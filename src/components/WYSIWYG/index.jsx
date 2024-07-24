// src/WysiwygEditor.js
import React, { useRef } from "react";
import "./styles.css";

const WysiwygEditor = () => {
  const editorRef = useRef(null);

  const formatText = (command) => {
    document.execCommand(command, false, null);
  };

  const createLink = () => {
    const url = prompt("Enter a URL:", "http://");
    if (url) {
      const selection = window.getSelection();
      if (!selection.rangeCount) return;
      const range = selection.getRangeAt(0);
      const link = document.createElement("a");
      link.href = url;
      link.appendChild(range.extractContents());
      range.insertNode(link);
    }
  };

  const insertImage = () => {
    const url = prompt("Enter an image URL:", "http://");
    if (url) {
      const selection = window.getSelection();
      if (!selection.rangeCount) return;
      const range = selection.getRangeAt(0);
      const image = document.createElement("img");
      image.src = url;
      range.insertNode(image);
    }
  };

  return (
    <div className="editor-container">
      <div className="toolbar">
        <button onClick={() => formatText("bold")}>
          <b>B</b>
        </button>
        <button onClick={() => formatText("italic")}>
          <i>I</i>
        </button>
        <button onClick={() => formatText("underline")}>
          <u>U</u>
        </button>
        <button onClick={() => formatText("insertOrderedList")}>OL</button>
        <button onClick={() => formatText("insertUnorderedList")}>UL</button>
        <button onClick={createLink}>Link</button>
        <button onClick={() => formatText("unlink")}>Unlink</button>
        <button onClick={insertImage}>Image</button>
      </div>
      <div
        ref={editorRef}
        className="editor"
        contentEditable
        suppressContentEditableWarning={true}
      >
        <p>Edit your content here...</p>
      </div>
    </div>
  );
};

export default WysiwygEditor;
