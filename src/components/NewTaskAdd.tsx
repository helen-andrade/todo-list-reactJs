import { Task } from "../pages/Home";
import "./NewTaskAdd.css";
interface Props {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
}

const NewTaskAdd = ({ tasks, onDeleteTask }: Props) => {
  function handleDeletTask(id: string) {
    onDeleteTask(id);
  }

  return (
    <div className="containerTaskAdded">
      {tasks.map((task) => (
        <div className="taskAdded" key={task.id}>
          <input type="checkbox" style={{textDecoration: tasks ? "line-through" : ''}} />
          <p>{task.task}</p>
          <img
            onClick={() => handleDeletTask(task.id)}
            className="iconTrash"
            src="../../assets/Trash.svg"
            alt="Icone de lixeira"
            title="Deletar tarefa"
          />
        </div>
      ))}
    </div>
  );
};

export default NewTaskAdd;