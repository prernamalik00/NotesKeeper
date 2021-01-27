import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";
import ToDoItem from "./toDoItem.jsx";

//import notes from "../notes";

function App()
{
  const [toSwitch, changeSwitch] = useState(false);

  function handleSwitch()
  {
    changeSwitch(prev => !prev);
  }

  // FOR NOTES PAGE
  const [noteArray, changeNotes] = useState([]);

  function addNotes(newNote)
  {
    changeNotes(prev => [...prev, newNote]);
  }

  function deleteNote(id)
  {
    changeNotes(prev => prev.filter((value, index)=>
                                        {  return index !== id; }));
  }

  //For TO DO List
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);


  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return <div>
              <Header toSwitch={handleSwitch} isNotes={toSwitch}></Header>
              {toSwitch ?
                <div className="to-do-list">
                <div className="container">
                <div className="heading">
                  <h1>To-Do List</h1>
                </div>
                <div className="form">
                  <input onChange={handleChange} type="text" value={inputText} />
                  <button onClick={addItem}>
                    <span>Add</span>
                  </button>
                </div>
                <div class="items">
                  <ul>
                    {items.map((todoItem, index) => (
                      <ToDoItem


                        key={index}
                        id={index}
                        text={todoItem}
                        onChecked={deleteItem}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              </div>
            : <div>
            <div style={{display:"flex", justifyContent: "center"}}> <InputArea onAdd={addNotes}/> </div>
            {noteArray.map((note,index) => (<Note
                                            key={index}
                                            id={index}
                                            title={note.title}
                                            content={note.content}
                                            toDelete = {deleteNote}
                                            />))}
              </div>}
      <Footer></Footer>

        </div>;
}

export default App;
