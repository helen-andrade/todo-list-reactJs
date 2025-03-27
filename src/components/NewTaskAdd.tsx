import { Task } from "../pages/Home";
import "./NewTaskAdd.css";
interface Props {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onToggleTaskCompletion: (id: string) => void;
}

const NewTaskAdd = ({ tasks, onDeleteTask, onToggleTaskCompletion }: Props) => {
  function handleDeletTask(id: string) {
    onDeleteTask(id);
  }

  return (
    <div className="containerTaskAdded">
      {tasks.map((task) => (
        <div className="taskAdded" key={task.id}>
          <input
            type="checkbox"
            checked={task.taskCompleted}
            onChange={() => onToggleTaskCompletion(task.id)}
          />

          <p
            style={{
              textDecoration: task.taskCompleted
                ? "line-through dashed"
                : "none",
            }}
          >
            {task.task}
          </p>

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
