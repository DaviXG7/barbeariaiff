import Form from "../defaults/Form";
import Input from "../defaults/Input";

export default function Agendar() {
  return (
    <Form action="mds" method="post">
      <h1 className="text-3xl">Criar um agedamento</h1>

        <div className="input">
          <label>Selecione o cliente</label>
          <select onChange={(option) => {}}>
          </select>
        </div>
        <div className="input">
          <label>Selecione o serviço</label>
          <select onChange={(option) => {}}>
            <option>Cabelo</option>
            <option>Barba</option>
            <option>Cabelo + Barba</option>
          </select>
        </div>

        <Input
          name="dia"
          type="datetime-local"
          label="Dia e horário"
        />
        
        <div className="input">
          <label>Selecione o barbeiro</label>
          <select onChange={(option) => {}}>
          </select>
        </div>

        <Input
          type="submit"
          label="Adicionar agendamento"
        />

    </Form>
  );
}
