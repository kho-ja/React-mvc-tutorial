import { useState } from "react";
import ListItem from "./component/ListItem";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [model, setModel] = useState([
    {
      id: 1,
      content: "Yugurish",
    },
    {
      id: 2,
      content: "Yugurish",
    },
    {
      id: 3,
      content: "Skarash",
    },
    {
      id: 5,
      content: "ovqatlanish",
    },
  ]);

  function inputHandler(e) {
    setInputValue(e.target.value);
  }

  function SubmitHandler(e) {
    e.preventDefault();
    setModel([
      ...model,
      {
        id: Math.max(...model.map((e) => e.id)) + 1,
        content: inputValue,
      },
    ]);
  }

  function handlerDelete(id) {
    let deleteIndex = model.findIndex((e) => e.id === id);
    let copyModel = [...model];
    copyModel.splice(deleteIndex, 1);
    setModel(copyModel);
  }

  function handleUpdate(id) {
    let newContent = prompt("Enter new content");
    let updateIndex = model.findIndex((e) => e.id === id);
    let copyModel = [...model];
    copyModel[updateIndex].content = newContent;
    setModel(copyModel);
  }

  return (
    <>
      <form onSubmit={SubmitHandler}>
        <input type="text" value={inputValue} onInput={inputHandler} />
        <button>submit</button>
      </form>
      <ul>
        {model.map((e) => (
          <ListItem
            key={e.id}
            data={e}
            handleDelete={handlerDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
