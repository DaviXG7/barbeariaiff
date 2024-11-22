import { useState } from "react";
import Input from "../defaults/Input";
import Form from "../defaults/Form";

enum User {
  BARBEIRO = "Barbeiro",
  CLIENTE = "Cliente",
  ADMINISTRADOR = "ADM",
}

export default function CriarUsuario() {
  const [user, setUser] = useState(User.CLIENTE);

  return (
    <Form method={"post"} action="http://localhost/ParteDavi/controller/cadastrar_usuario.php">
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
        name="data_de_nascimento"
        type="date"
        label="Data de nascimento:"
      ></Input>
      <div className="input">
        <label>Selecione o grupo do usuário</label>
        <select
          name="usuario"
          onChange={(option) => {
            setUser(User[option.target.value as keyof typeof User]);
          }}
        >
          <option selected value="CLIENTE">
            Cliente
          </option>
          <option value="BARBEIRO">Barbeiro</option>
          <option value="ADMINISTRADOR">Administrador</option>
        </select>
      </div>
      {user == User.ADMINISTRADOR && (
        <Input
          name="senha"
          type="password"
          placeholder="Digite a sua senha"
          label="Senha:"
        ></Input>
      )}
      {user == User.BARBEIRO && (
        <>
          <Input
            name="chave_pix"
            type="text"
            placeholder="Digite a chave pix"
            label="Chave PIX:"
          ></Input>
        <Input
            name="nome_do_banco"
            type="text"
            placeholder="Digite o nome do banco"
            label="Banco:"
          ></Input>
          <Input
            name="numero_da_conta"
            type="number"
            placeholder="Digite o número da conta"
            label="Número da conta:"
          ></Input>
          <Input
            name="numero_da_agencia"
            type="number"
            placeholder="Digite o número da agência"
            label="Número da agência:"
          ></Input>
        
        </>
      )}
      <Input
        name="enviar"
        type="submit"
        label="Cadastrar"
      ></Input>
    </Form>
  );
}
