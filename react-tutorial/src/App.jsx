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

  console.count("Render");

  function HandleSubmit(e) {
    e.preventDefault();
    const newId = Math.max(...model.map((e) => e.id)) + 1;
    setModel([...model, { id: newId, content: inputValue }]);
    setInputValue("");
  }

  function handleDelete(id) {
    setModel(model.filter((e) => e.id !== id));
  }

  function handleUpdate(id) {
    const index = model.findIndex((item) => item.id === id);
    const newModel = [...model];
    newModel[index].content = prompt("Enter new content", model[index].content);
    setModel(newModel);
  }

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          value={inputValue}
          onInput={(e) => setInputValue(e.target.value)}
        />
        <button>submit</button>
      </form>
      <ul>
        {model.map((e) => (
          <ListItem
            key={e.id}
            data={e}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
