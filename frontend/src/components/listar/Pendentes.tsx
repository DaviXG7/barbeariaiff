import "./lista.css";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

async function getJson(url: string) {
  const response = await fetch("http://localhost/" + url)

  return response.json()
}

export default function Pendentes() {

  const [json, setJson] = useState<
      Array<{
        id: string | undefined;
        data: string | undefined;
        horario: string | undefined;
        servico: string | undefined;
        nome_barbeiro: string | undefined;
        nome_cliente: string | undefined;
        email_cliente: string | undefined;
  }>>([]);

  useEffect(() => {
    getJson("api.php?tipo=pendentes").then((r) => {
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
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.nome_cliente}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.nome_barbeiro}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.data} {pendente.horario}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.servico}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.email_cliente}</p>
          <div className="sm:w-32 w-12 flex items-center justify-center">
            <button className="btn" onClick={(e) => {
                      getJson("api.php?tipo=pendentes&delete=" + pendente.id).then((r) => {
                        setJson(r);
                      })

                    }}>Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
}
