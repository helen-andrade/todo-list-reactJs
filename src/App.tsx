import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import NewTaskAdd from "./components/NewTaskAdd";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div>
      <Header />
      <Input />
      <Tasks />
      <NewTaskAdd />
    </div>
  );
}

export default App;
