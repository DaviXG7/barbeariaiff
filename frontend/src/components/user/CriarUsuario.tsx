import Input from "../defaults/Input";
import Form from "./Form";

export default function CriarUsuario() {
  return (
    <Form method={"post"} action="home">
      <h1 className="text-3xl">Criar usuário</h1>
      <Input
        name="nome"
        type="text"
        placeholder="Digite o nome do usuário"
        label="Nome:"
      ></Input>
      <Input
        name="email"
        type="email"
        placeholder="Digite o email do usuário"
        label="Email:"
      ></Input>
      <Input
        name="data_nasc"
        type="date"
        placeholder="Data"
        label="Data de nascimento:"
      ></Input>

      <div className="input">
        <label>Selecione o grupo do usuário</label>
        <select>
          <option>Cliente</option>
          <option>Barbeiro</option>
          <option>Administrador</option>
        </select>
      </div>
    </Form>
  );
}
