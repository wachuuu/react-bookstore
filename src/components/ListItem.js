
function ListItem(props) {
  return (
    <div className="ListItem">
      {JSON.stringify(props.item)}
      <button onClick={() => props.editRating(props.item)} >edit</button>
      <button onClick={() => props.deleteItem(props.item)} >delete</button>
    </div>
  );
}

export default ListItem
