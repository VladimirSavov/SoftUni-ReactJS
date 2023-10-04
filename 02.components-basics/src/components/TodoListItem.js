const TodoListItem = (props) => {

    let color = "black";

    if (props.children == 1) {
        color = "red"
    }
    else if (props.children == 2) {
        color = "blue"
    }
    else if (props.children > 2) {
        color = "orange"
    }

    return <li style={{ color }}>{props.children}</ li >
}
export default TodoListItem;