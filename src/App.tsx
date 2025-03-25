import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
/* 
Biblioteca p/ criar ID's únicos = uuid
importação: import { v4 as uuidv4 } from 'uuid';
*/

function App() {
  return (
    <div>
      <Header />
      <Input />
      <Tasks />
    </div>
  );
}

export default App;
