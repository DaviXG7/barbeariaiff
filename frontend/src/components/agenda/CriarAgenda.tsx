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
        label="Início:"
      ></Input>
      <Input
        name="fim"
        type="time"
        label="Fim:"
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
        name="enviar"
        type="submit"
        label="Cadastrar"
      ></Input>
    </Form>
  );
}
