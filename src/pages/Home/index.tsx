import "./styles.css";
import Header from "../../components/Header";
import Input from "../../components/Input";
import NewTaskAdd from "../../components/NewTaskAdd";
import { useState } from "react";

export interface Task {
  id: string;
  task: string;
  completed: boolean;
}

function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };
  
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Header />
      <Input addTask={addTask} />
      <div className="containerTasks">
        <div className="tasksCreated">
          <p>Tarefas criadas</p>
          <span className="numberTasksCreateds number">{tasks.length}</span>
        </div>
        <div className="completedTasks">
          <p>Concluídas</p>
          <span className="numberTasksCompletes number">0</span>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="message">
          <img src="../../assets/Clipboard.svg" alt="Clipboard" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      ) : (
        <NewTaskAdd tasks={tasks} onDeleteTask={deleteTask} />
      )}
    </div>
  );
}

export default Home;