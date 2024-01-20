import Link from 'next/link'
import styles from '../../styles/users.module.css'
import { useState, useEffect } from 'react'

const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { users: data }
  }
}

const Users = ({ users }) => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    const taskValue = document.getElementsByClassName('task_value')[0]
    const taskSubmit = document.getElementsByClassName('task_submit')[0]
    const taskList = document.getElementsByClassName('task_list')[0]

    const addTasks = task => {
      // 入力したタスクを追加・表示
      const listItem = document.createElement('li')
      const showItem = taskList.appendChild(listItem)
      showItem.innerHTML = task

      // タスクに削除ボタンを付与
      const deleteButton = document.createElement('button')
      deleteButton.innerHTML = 'Delete'
      listItem.appendChild(deleteButton)

      // 削除ボタンをクリックし、イベントを発動（タスクが削除）
      deleteButton.addEventListener('click', evt => {
        evt.preventDefault()
        deleteTasks(deleteButton)
      })
    }

    // 削除ボタンにタスクを消す機能を付与
    const deleteTasks = deleteButton => {
      const chosenTask = deleteButton.closest('li')
      taskList.removeChild(chosenTask)
    }

    // 追加ボタンをクリックし、イベントを発動（タスクが追加）
    if (taskSubmit) {
      taskSubmit.addEventListener('click', evt => {
        evt.preventDefault()
        const task = taskValue.value
        addTasks(task)
        taskValue.value = ''
      })
    }
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      setTasks(data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, title: newTask, completed: false }
    ])
    setNewTask('')
  }

  const toggleTaskCompletion = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }
  return (
    <div>
      <h1>All Users</h1>
      {users.map(user => (
        <Link legacyBehavior href={`/users/${user.id}`} key={user.id}>
          <a className={styles.single}>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}

      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type='checkbox'
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.title}
          </li>
        ))}
      </ul>
      <input
        type='text'
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder='Enter a new task'
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export { getStaticProps }
export default Users
