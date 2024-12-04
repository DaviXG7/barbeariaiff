import {useEffect, useState} from "react";

async function getJson(url: string) {
    const response = await fetch("http://localhost/" + url)

    return response.json()
  }

export default function PendentesHoje() {

    const [json, setJson] = useState<
        Array<{
          id: string | undefined;
          data: string | undefined;
          horario: string | undefined;
          servico: string | undefined;
          nome_barbeiro: string | undefined;
          nome_cliente: string | undefined;
          email_cliente: string | undefined;
          imagem_cliente: string | undefined;
    }>>([]);

    useEffect(() => {
      getJson("api.php?tipo=pendenteshoje").then((r) => {
          setJson(r);
      });
    }, []);

    return (
        <div className="flex flex-col  bg-white text-center w-full mx-9 border rounded-2xl">
            <h1 className={"text-2xl font-bold"}>Serviços pendentes para hoje:</h1>
            <div className={"flex flex-wrap justify-items-start justify-around"}>
                {json.map((pendente) => (
                    <div style={{width: "46.66666%"}} className={"flex flex-col sm:flex-row sm:h-48 h-auto border border-black p-2 m-2 rounded items-center justify-around"}>
                        <img style={{height: "170px"}} src={pendente.imagem_cliente} alt="Imagem"/>

                        <div className={"flex flex-col w-3/5 text-start"}>
                            <p><strong>Nome do cliente: </strong> {pendente.nome_cliente}</p>
                            <p><strong>Email do cliente: </strong> {pendente.email_cliente}</p>
                            <br/>
                            <p><strong>Nome do barbeiro: </strong>{pendente.nome_barbeiro}</p>
                            <br/>
                            <p><strong>Dia e hora: </strong>      {pendente.data} {pendente.horario}</p>
                            <p><strong>Serviço: </strong>{pendente.servico}</p>
                        </div>

                    </div>
                ))
                }

                {json.length === 0 && (
                    <h3>Nenhum pedido para hoje</h3>
                )}
            </div>


        </div>
    )

}