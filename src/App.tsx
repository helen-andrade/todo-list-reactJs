import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
/* 
Biblioteca p/ criar ID's únicos = uuid
importação: import { v4 as uuidv4 } from 'uuid';
*/

function App() {
  return (
    <div>
      <Header />
      <Input />
    </div>
  );
}

export default App;
