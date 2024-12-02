import "./lista.css";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

async function getJson(url: string): Promise<[{
  id: string | undefined;
  cliente_nome: string | undefined;
  cliente_email: string | undefined;
  barbeiro_nome: string | undefined;
  data: string | undefined;
  hora: string | undefined;
  servico: string | undefined;
}] > {
  const response = await fetch("http://localhost/" + url)

  return await response.json()
}

export default function Pendentes() {

  const [json, setJson] = useState<
      Array<{
        id: string | undefined;
        cliente_nome: string | undefined;
        cliente_email: string | undefined;
        barbeiro_nome: string | undefined;
        data: string | undefined;
        hora: string | undefined;
        servico: string | undefined;
  }>>([]);

  useEffect(() => {
    getJson("ParteDavi/api.php?tipo=agendamentos").then((r) => {
      console.log(r)
      setJson(r);
    });
  }, []);

  return (
    <div className="lista">
      <div className="flex justify-around w-full bg-white border-b border-b-black p-1">
        <p className="w-1/6 text-center">Nome do cliente</p>
        <p className="w-1/6 text-center">Nome do barbeiro</p>
        <p className="w-1/6 text-center">Dia e horário</p>
        <p className="w-1/6 text-center">Serviço</p>
        <p className="w-1/6 text-center">Email do cliente</p>
        <p className="w-1/6 text-center">Excluir</p>

      </div>

      {json.map((pendente) => (
        <div className="flex justify-around items-center w-full border-b border-b-gray p-1 bg-white">
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.cliente_nome}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.barbeiro_nome}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.data} {pendente.hora}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.servico}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.cliente_email}</p>
          <div className="sm:w-32 w-12 flex items-center justify-center">
            <Link className="btn" to={""}>Excluir</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
