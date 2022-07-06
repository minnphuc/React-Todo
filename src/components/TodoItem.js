function TodoItem(props) {
  const changeHandler = e => {
    props.onCheckItem(e.target.closest("li").id);
  };

  return (
    <li id={props.item.id}>
      <input
        type="checkbox"
        checked={props.item.finished}
        onChange={changeHandler}
      />

      <span
        className={props.item.finished ? `${props.item.finishedClass}` : ""}
      >
        {props.item.content}
      </span>
    </li>
  );
}
export default TodoItem;
