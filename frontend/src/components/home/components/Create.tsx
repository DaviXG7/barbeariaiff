import {Link} from "react-router-dom";

function CreateButton() {
  return <>
    <div className="fixed bottom-6 right-11">
      <div className="flex items-center fixed bottom-28 w-40 right-0.5 bg-red-500 h-48 flex-col justify-evenly rounded-2xl">
        <Link className="btn" to={""}>Criar usuário</Link>
        <Link className="btn" to={""}>Criar agenda</Link>
        <Link className="btn" to={""}>Agendar</Link>
      </div>
      <button className=" text-white w-20 h-20 rounded-full bg-green-500">+</button>
    </div>
  </>;
}

export default CreateButton;
