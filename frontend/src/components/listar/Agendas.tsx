import "./lista.css";
import {useEffect, useState} from "react";

async function fetchGet(url: string) {
    const response = await fetch("http://localhost/" + url)

    return await response.json()
}

function getDiaDaSemana(dia: string | undefined) {
  switch (dia) {
    case "0":
      return "Domingo";
    case "1":
      return "Segunda";
    case "2":
      return "Terça";
    case "3":
      return "Quarta";
    case "4":
      return "Quinta";
    case "5":
      return "Sexta";
    case "6":
      return "Sábado";
    default:
      return "Dia inválido";
  }
}

export default function Agendas() {

  const [json, setJson] = useState<
      Array<{
        horario: string | undefined;
        nome_barbeiro: string | undefined;
        dia_semana: string | undefined;
        imagem_barbeiro: string | undefined;
        id: string
       }>
  >([]);

  useEffect(() => {
    fetchGet("api.php?tipo=agendas").then((r) => {
      console.log(r)
      setJson(r);
    });
  }, []);

  return (
    <div className="lista">
      <div className="flex justify-around w-full bg-white border-b border-b-black p-1">
        <p className="w-1/5 text-center">Imagem</p>
        <p className="w-1/5 text-center">Nome do barbeiro</p>
        <p className="w-1/5 text-center">Dia da semana</p>
        <p className="w-1/5 text-center">Horário</p>
        <p className="w-1/5 text-center">Excluir</p>
      </div>

      {json.map((agenda) => (
        <div className="flex justify-around items-center w-full border-b border-b-gray p-1 bg-white">
          <img
            className="sm:w-32 sm:h-32 w-12 h-12"
            width={100}
            height={100}
            src={agenda.imagem_barbeiro}
          ></img>
          <p className="sm:w-32 w-12 text-center flex-wrap">{agenda.nome_barbeiro}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{getDiaDaSemana(agenda.dia_semana)}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{agenda.horario}</p>
          <div className="sm:w-32 w-12 flex items-center justify-center">
            <button className="btn" onClick={(e) => {
                      fetchGet("api.php?tipo=agendas&delete=" + agenda.id).then((r) => {
                        setJson(r);
                      })

                    }}>Excluir</button>
        </div>
        </div>
      ))}
    </div>
  );
}
