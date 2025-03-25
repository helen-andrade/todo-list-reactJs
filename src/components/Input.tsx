import { useState } from "react";
import "./Input.css";
import { Task } from "../pages/Home";
import { v4 as uuidv4 } from "uuid";

interface Props {
  addTask: (newTask: Task) => void;

}

const Input = ({addTask}: Props) => {
  const [task, setTask] = useState<string>("");

  const handleAddTask = () => {
    if (!task.trim()) return
    const newTask = {
      id: uuidv4(),
      task: task,
      completed: false
    }
    addTask(newTask)
  }

  return (
    <div className="inputNewTask">
      <input type="text" placeholder="Adicione uma nova tarefa" value={task} onChange={(event) => setTask(event.target.value)}/>
      <div className="containerAddNewTask">
        <button onClick={handleAddTask} className="buttonNewTask" >
          Criar
          <img
            className="iconAdd"
            src="../../assets/Create.svg"
            alt="Adicionar nova tarefa"
          />
        </button>
      </div>
    </div>
  );
};

export default Input;
