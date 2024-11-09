import "./lista.css";

let jsons = [
 
  {
    imagem: "https://avatars.githubusercontent.com/u/42486346?v=4",
    barbeiro: "Germano Silva",
    hora_inicio: "10:00",
    hora_fim: "20:00",
  }

];

export default function Agendas() {
  return (
    <div className="lista">
      <div className="flex justify-around w-full bg-white border-b border-b-black p-1">
        <p className="w-1/5 text-center">Imagem</p>
        <p className="w-1/5 text-center">Nome do barbeiro</p>
        <p className="w-1/5 text-center">Começo do turno</p>
        <p className="w-1/5 text-center">Término do turno</p>
        <p className="w-1/5 text-center">Editar</p>
      </div>

      {jsons.map((agenda) => (
        <div className="flex justify-around items-center w-full border-b border-b-gray p-1 bg-white">
          <img
            className="sm:w-32 sm:h-32 w-12 h-12"
            width={100}
            height={100}
            src={agenda.imagem}
          ></img>
          <p className="sm:w-32 w-12 text-center flex-wrap">{agenda.barbeiro}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{agenda.hora_inicio}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{agenda.hora_fim}</p>
          <div className="sm:w-32 w-12 flex items-center justify-center">
            <button className="btn ">Editar</button>
          </div>
        </div>
      ))}
    </div>
  );
}
