const TodoList = ({ todos }) => {
  return (
    <ul className='list-group'>
      {todos.map(todo => (
        <li
          key={todo.id}
          class='list-group-item d-flex justify-content-between align-items-center'
        >
          {todo.title}
          <input type='checbox' checked={todo.completed} />
        </li>
      ))}
    </ul>
  )
}

export default TodoList
