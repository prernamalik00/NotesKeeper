import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight';
import Button from '@material-ui/core/Button';

function Header(props)
{
  return <div>
              <header >
              <h1 style={{color: props.isNotes && "hsl(198, 1%, 29%)"}}><HighlightIcon/>Keeper App</h1>
              <Button className="switch-button" style={{color: props.isNotes && "hsl(198, 1%, 29%)"}} onClick={props.toSwitch} >{props.isNotes ? "Notes" : "To-do List"}</Button>
              </header>

        </div>;
}

export default Header;
