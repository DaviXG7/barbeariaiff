import { useState } from "react";
import { Link } from "react-router-dom";

function CreateButton() {
  let [hidden, setHidden] = useState(true);

  return (
    <div className="fixed bottom-6 right-10 z-10">
      {!hidden && (
        <body>
          <div className="flex items-center fixed bottom-24 w-36 right-0.5 bg-black bg-transparency-75 h-56 flex-col justify-evenly rounded-2xl">
            <Link className="btn" to={"/criarservico"}>
              Criar Serviço
            </Link>
            <Link className="btn" to={"/usuario/criar"}>
              Criar usuário
            </Link>
            <Link className="btn" to={"/agenda/criar"}>
              Criar agenda
            </Link>
            <Link className="btn" to={"/agendar"}>
              Agendar
            </Link>
          </div>
        </body>
      )}

      <button
        onClick={function () {
          setHidden(!hidden);
        }}
        className="text-5xl text-center text-white w-16 h-16 rounded-full bg-green-500"
      >
        +
      </button>
    </div>
  );
}

export default CreateButton;
