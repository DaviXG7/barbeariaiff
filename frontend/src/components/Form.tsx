import logo from "../imgs/logo.png";
import Input from "./defaults/Input";
import './form.css';

function LoginForm() {
    return(
        <div className="flex flex-col items-center w-md-1/2 h-1/2">
            <img src={logo} className="m-3" alt="" width={75}/>
            <form action="" className="loginform">
                <p className="m-3">
                    Entre na barbearia
                </p>
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
                <Input
                    name="entre"
                    type="submit"
                    placeholder="Entrar"
                    label=""
                ></Input>
            </form>
        </div>
    )
}

export default LoginForm;