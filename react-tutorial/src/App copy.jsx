import { useState, useCallback } from "react";
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

  console.count("Render2");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const newId = Math.max(...model.map((e) => e.id)) + 1;
      setModel((prev) => [...prev, { id: newId, content: inputValue }]);
      setInputValue("");
    },
    [inputValue, model]
  );

  const handleDelete = useCallback(
    (id) => setModel((prev) => prev.filter((e) => e.id !== id)),
    []
  );

  const handleUpdate = useCallback((id) => {
    setModel((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      const newModel = [...prev];
      newModel[index].content = prompt("Enter new content");
      return newModel;
    });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
