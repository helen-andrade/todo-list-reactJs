/*import { useState } from "react";*/
import "./NewTaskAdd.css"

/*
interface TaskProps {
  id: number;
  task: string;
  completed: boolean;
  handleDeleteTask: (id: number) => void;
  handleCompleteTask: (id: number) => void;
}
*/

/*
function handleNewTask({ task }: TaskProps) {
  const [task, setTask] = useState<TaskProps[]>([]);
  const [taskCompleted, setTaskCompleted] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [id, setId] = useState<number>(0);  
}
*/

const NewTaskAdd = () => {
  return (
    <div className="containerTaskAdded">
        <div className="taskAdded">
          <input type="checkbox"/>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit!</p>
          <img className="iconTrash" src="../../assets/Trash.svg" alt="Icone de lixeira" />
        </div>
    </div>
    
  );
};

export default NewTaskAdd;
