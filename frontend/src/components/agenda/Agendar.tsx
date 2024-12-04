import Form from "../defaults/Form";
import Input from "../defaults/Input";
import {useEffect, useState} from "react";

async function fetchGet(url: string) {
  const response = await fetch("http://localhost/" + url)

    return response.json()
}

export default function Agendar() {

  const [clientes, setClientes] = useState([{nome: "", id: ""}]);

  const[barbeiros, setBarbeiros] = useState([{nome_barbeiro: "", id_agenda: "", horario: ""}]);

  const [message, setMessage] = useState({success: "", error: ""});


  useEffect(() => {
    fetchGet("api.php?tipo=clientes").then((r) => {
      setClientes(r);
    });
  }, []);

  return (
    <Form
        id={"agendar"}
        action="controller/criar_agendamento.php" method="post"
        onRespose={(r: any) => {
          setMessage(r)

          // @ts-ignore
          const inputDia : HTMLInputElement | null = document.getElementById("dia");

          fetchGet("api.php?tipo=disponivel&dia=" + inputDia?.value).then(
            (r) => {
              return setBarbeiros(r);
            }
        )
        }}
    >

      <h1 className="text-3xl">Criar um agedamento</h1>

        <div className="input">
          <label>Selecione o cliente</label>
          <select name={"cliente"}>
            {clientes.map((cliente) => <option value={cliente.id}>{cliente.nome}</option>)}

          </select>
        </div>
        <div className="input">
          <label>Selecione o serviço</label>
          <select name={"servico"}>
            <option>Cabelo</option>
            <option>Barba</option>
            <option>Cabelo + Barba</option>
            <option>Unhas</option>
          </select>
        </div>

        <Input
          name="dia"
          type="date"
          label="Dia do agendamento"
          onChange={(event) => {
            console.log(event.target.value)
            fetchGet("api.php?tipo=disponivel&dia=" + event.target.value).then(
                (r) => {
                  return setBarbeiros(r);
                }
            )
          }}
        />
        
        <div className="input">
          <label>Selecione o barbeiro</label>
          <select name={"barbeiro"}>
            {barbeiros.map((barbeiro) => <option value={barbeiro.id_agenda}>{barbeiro.nome_barbeiro} {barbeiro.horario}</option>)}

          </select>
        </div>

        <Input
          type="submit"
          label="Adicionar agendamento"
        />

      {message.success && (<small className={"text-green-500 mb-2"}>{message.success}</small>)}
      {message.error && (<small className={"text-red-600 mb-2"}>{message.error}</small>)}

    </Form>
  );
}
