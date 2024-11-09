import Input from "../defaults/Input";
import "./editarusuario.css";

let barbeiro = true;

export default function EditarUsuario() {
  return (
    <form className="editar">
      <div className="w-10 h-10">
        <div>
          <input
            type="image"
            src="https://avatars.githubusercontent.com/u/42486346?v=4"
            width={136}
            height={136}
            id="pos3"
          />
        </div>
        <div>
          <Input name="nome" label="Nome" type="text"></Input>
        </div>
        <label id="pos2">Email</label>
        <br />
        <input type="text" className="pos" disabled /> <br />
        <label id="pos2">Nome</label>
        <br />
        <input type="text" className="pos" />
      </div>

      {barbeiro && <></>}
      <button className="btn" id="b1">
        Editar
      </button>
    </form>
  );
}
