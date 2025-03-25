import "./Tasks.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className="container">
      <div className="containerTasks">
          <div className="tasksCreated">
            <p>Tarefas criadas</p>
            <span className="numberTasksCreateds number">0</span>
          </div>
          <div className="completedTasks">
            <p>Concluídas</p>
            <span className="numberTasksCompletes number">0</span>
          </div>
      </div>

      <div className="message">
        <img src="../../assets/Clipboard.svg" alt="Clipboard" />
        <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  );
};

export default Tasks;
