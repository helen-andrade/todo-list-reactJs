import { useState } from "react";
import "./Input.css";
import { v4 as uuidv4 } from "uuid";

interface Props {
  addTask: (newTask: Task) => void;
}
export interface Task {
  id: string;
  task: string;
  taskCompleted: boolean;
}

const Input = ({ addTask }: Props) => {
  const [task, setTask] = useState<string>("");

  const handleAddTask = () => {
    if (!task.trim()) return;
    const newTask: Task = {
      id: uuidv4(),
      task: task,
      taskCompleted: false,
    };
    addTask(newTask);
    setTask("");
  };

  return (
    <div className="inputNewTask">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <div className="containerAddNewTask">
        <button onClick={handleAddTask} className="buttonNewTask">
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
