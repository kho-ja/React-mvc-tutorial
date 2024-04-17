export default function ListItem({ data, handleDelete, handleUpdate }) {
  return (
    <li>
      {data.content}
      <button onClick={() => handleUpdate(data.id)}>Edit</button>
      <button onClick={() => handleDelete(data.id)}>Delete</button>
    </li>
  );
}
