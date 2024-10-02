import logo from "../../imgs/logo.png";
import './form.scss';
import Input from "../defaults/Input";

function LoginForm() {
    return(
        <div className="flex flex-col items-center w-full sm:w-96 h-1/2">
            <img src={logo} className="m-3" alt="" width={75}/>
            <form action="home" method="get" className="loginform">
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