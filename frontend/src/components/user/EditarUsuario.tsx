import Input from "../defaults/Input";
import "./editarusuario.css";

let barbeiro = true;

export default function EditarUsuario() {
  return (
    <form className="editar">
      
      <div className={"flex mb-2 sm:flex-row flex-col items-center"}>
        <img src="https://avatars.githubusercontent.com/u/42486346?v=4" alt="Sem imagem do germano" style={{height: "250px", borderRadius: "10px"}}/>
        <div className={"flex flex-col w-full "}>
          <Input
          name={"nome"}
          type={"text"}
          placeholder={"Digite o novo nome"}
          label={"Nome:"}
          ></Input>
          <Input
              name={"email"}
              type={"text"}
              placeholder={"email"}
              label={"Email:"}
              value={"Email"}
          ></Input>

        </div>
      </div>

      {barbeiro && (
          <div className={"flex flex-wrap flex-col w-full"}>

            <div className={"flex justify-between"}>
              <Input
                  name={"chave"}
                  type={"text"}
                  placeholder={"Digite a nova chave pix"}
                  label={"Chave PIX:"}
              ></Input>
              <Input
                  name={"nome_banco"}
                  type={"text"}
                  placeholder={"Digite o novo nome do Banco"}
                  label={"Nome do banco:"}
              ></Input>
            </div>
            <div className={"flex justify-between"}>
              <Input
                  name={"numero_conta"}
                  type={"number"}
                  placeholder={"Digite o novo número da conta"}
                  label={"Número da agência:"}
              ></Input>
              <Input
                  name={"numero_conta"}
                  type={"number"}
                  placeholder={"Digite o novo número da agência"}
                  label={"Número da conta:"}
              ></Input>
            </div>
          </div>


      )}

      <button className="btn" id="b1">
        Editar
      </button>
    </form>
  );
}
