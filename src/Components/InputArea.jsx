import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [collapse, changeCollapse] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleCollapse()
  {
    changeCollapse(true);
  }

  function submitNote(event) {
    props.onAdd(note);

    setNote({
      title: "",
      content: ""
    });
    changeCollapse(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {collapse && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}

          <textarea
          onClick={handleCollapse}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={collapse ? "3":"1"}
         />

          
        <Zoom in={collapse? true : false}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
