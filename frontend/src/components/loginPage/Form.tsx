import logo from "../../imgs/logo.png";
import "./form.css";
import Input from "../defaults/Input";

function LoginForm() {
  return (
    <div className="fundo">
      <img src={logo} className="m-3" alt="" width={75} />
      <form action="inicio" method="get" className="loginform">
        <p className="m-3">Entre na barbearia</p>
        <Input
          name="email"
          type="email"
          placeholder="Digite seu email"
          label="Email:"
        ></Input>
        <Input
          name="senha"
          type="password"
          placeholder="Digite sua senha"
          label="Senha:"
        ></Input>
        <Input name="entre" type="submit" label="Entrar"></Input>
      </form>
    </div>
  );
}

export default LoginForm;
