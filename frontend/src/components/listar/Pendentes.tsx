import "./lista.css";

let jsons = [
 
  {
    cliente: "Davi",
    barbeiro: "Germano Silva",
    dia_e_hora: "9-11-2001 no aviao 10:00",
    email_cliente: "davisonic2010@gmail.com",
    servico: "barba"
  }

];

export default function Pendentes() {
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

      {jsons.map((pendente) => (
        <div className="flex justify-around items-center w-full border-b border-b-gray p-1 bg-white">
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.cliente}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.barbeiro}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.dia_e_hora}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.servico}</p>
          <p className="sm:w-32 w-12 text-center flex-wrap">{pendente.email_cliente}</p>
          <div className="sm:w-32 w-12 flex items-center justify-center">
            <button className="btn ">Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
}
