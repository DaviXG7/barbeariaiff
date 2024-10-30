import Form from "../defaults/Form";
import Input from "../defaults/Input";

export default function CriarAgenda() {
  return (
    <Form method={"post"} action="home">
      <h1 className="text-3xl">Criar agenda</h1>
      <div className="input">
        <label>Selecione o barbeiro</label>
        <select onChange={(option) => {}}></select>
      </div>
      <div className="input">
        <label>Selecione o dia da semana</label>
        <select onChange={(option) => {}}>
          <option>Domingo</option>
          <option>Segunda</option>
          <option>Terça</option>
          <option>Quarta</option>
          <option>Quinta</option>
          <option>Sexta</option>
          <option>Sábado</option>
        </select>
      </div>
      <Input
        name="inicio"
        type="time"
        placeholder="Horário de inicio"
        label="Início:"
      ></Input>
      <Input
        name="fim"
        type="time"
        placeholder="Horário de fim"
        label="Fim:"
      ></Input>
      <Input
        name="inicio_intervalo"
        type="time"
        placeholder="Horário de inicio de intervalo"
        label="Início de intervalo:"
      ></Input>
      <Input
        name="fim_intervalo"
        type="time"
        placeholder="Horário de Fim de intervalo"
        label="Fim de intervalo:"
      ></Input>

      <Input
        name="enviar"
        type="submit"
        placeholder="Cadastrar"
        label="Cadastrar"
      ></Input>
    </Form>
  );
}
