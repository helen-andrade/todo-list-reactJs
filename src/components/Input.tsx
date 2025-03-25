import "./Input.css";

const Input = () => {
  return (
    <div className="inputNewTask">
      <input type="text" placeholder="Adicione uma nova tarefa"/>
      <div className="containerAddNewTask">
        <button className="buttonNewTask" >
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
