import Form from "../defaults/Form";
import Input from "../defaults/Input";
import {useEffect, useState} from "react";

async function fetchGet(url: string) {
    const response = await fetch("http://localhost/" + url)

    return await response.json()
}

export default function CriarAgenda() {

    const [json, setJson] = useState<
        Array<{ id: string | undefined; nome: string | undefined; }>
    >([]);

    useEffect(() => {
        fetchGet("api.php?tipo=barbeiros").then((r) => {
            console.log(r)
            setJson(r);
        });
    }, []);

    const [message, setMessage] = useState({success: "", error: ""});


    return (
    <Form
        id="criarAgenda"
        method={"post"}
        action="controller/criar_agenda.php"
        onRespose={(r: any) => {
            setMessage(r)
        }}
    >
      <h1 className="text-3xl">Criar agenda</h1>
      <div className="input">
        <label>Selecione o barbeiro</label>
        <select name={"barbeiro"}>

            {json.map((barbeiro) => <option value={barbeiro.id}>{barbeiro.nome}</option>)}


        </select>
      </div>
      <div className="input">
        <label>Selecione o dia da semana</label>
        <select name={"dia_da_semana"}>
          <option value={"0"}>Domingo</option>
          <option value={"1"}>Segunda</option>
          <option value={"2"}>Terça</option>
          <option value={"3"}>Quarta</option>
          <option value={"4"}>Quinta</option>
          <option value={"5"}>Sexta</option>
          <option value={"6"}>Sábado</option>
        </select>
      </div>
      <Input
        name="inicio"
        type="time"
        label="Início:"
      ></Input>
      <Input
        name="inicio_intervalo"
        type="time"
        label="Início de intervalo:"
      ></Input>
      <Input
        name="fim_intervalo"
        type="time"
        label="Fim de intervalo:"
      ></Input>
        <Input
            name="fim"
            type="time"
            label="Fim:"
        ></Input>

      <Input
        name="enviar"
        type="submit"
        label="Cadastrar"
      ></Input>
        {message.success && (<small className={"text-green-500 mb-2"}>{message.success}</small>)}
        {message.error && (<small className={"text-red-600 mb-2"}>{message.error}</small>)}
    </Form>
  );
}
