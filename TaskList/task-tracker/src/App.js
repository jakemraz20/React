import { useState } from "react"

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

function App() {

  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Docs Apt",
        day: "Feb 5th at 2:30pm",
        reminder: true
      },
      {
        id: 2,
        text: "Vet Apt",
        day: "Feb 5th at 3:30pm",
        reminder: true
      },
      {
        id: 3,
        text: "Dentist Apt",
        day: "Feb 5th at 4:30pm",
        reminder: true
      },
      {
        id: 4,
        text: "Foot Apt",
        day: "Feb 6th at 2:30pm",
        reminder: true
      },
      {
        id: 5,
        text: "Coffee with Janet",
        day: "Feb 5th at 1:30pm",
        reminder: false
      }
    ]
  )

  //Add Task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000000000) +1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

  }
  //To delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleRemind = (id) => {
    setTasks(tasks.map((task)=>task.id === id ?
    {...task, reminder:!task.reminder } : task))
  }
  
  return (
    <div className='container'>
      <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd}/> 
      {showAdd && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemind}/>)
      : ('No Task To Show')}
    </div>
  );
}

export default App;
