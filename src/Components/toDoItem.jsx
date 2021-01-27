import React,{useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function ToDoItem(props) {
  const [ifClick, changeClick] = useState(false);

  function onClicking()
  {
    changeClick(prev => !prev);
  }

  return (
    <div >
    <li onClick={onClicking} style={{textDecoration: ifClick && "line-through"}}>{props.text} <button className="delete" onClick={() => {
                                                props.onChecked(props.id);
                                              }} ><DeleteIcon/></button></li>
    </div>
  );
}

export default ToDoItem;
