import logo from "../../imgs/logo.png";
import "./form.css";
import Input from "../defaults/Input";
import Form from "../defaults/Form";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';


function LoginForm() {

  const navigate = useNavigate();


  const [message, setMessage] = useState({success: "", error: ""});

  return (
    <div className="fundo">
      <img src={logo} className="m-3" alt="" width={75}/>
      <Form action="controller/login.php" method="post"
            onRespose={(r: any) => {
              setMessage(r);



              if (r.hasOwnProperty("id")) {
                localStorage.setItem("id", r.id)
                localStorage.setItem("imagem", r.imagem)
                navigate('/inicio');
                console.log("Usuário autenticado");
              }



            }}
             id={"form"}
      >
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
        {message.error && (<small className={"text-red-600 mb-2"}>{message.error}</small>)}
        {message.success && (<small className={"text-green-500 mb-2"}>{message.success}</small>)}

      </Form>
    </div>
  );
}

export default LoginForm;
