import Input from "../defaults/Input";
import Form from "../defaults/Form";
import {useEffect, useState} from "react";

async function fetchGet(url: string) {
    const response = await fetch("http://localhost/" + url)

    return await response.json()
}

export default function CriarServico() {

    const [message, setMessage] = useState({success: "", error: ""});

    return (
        <Form
            id="criarservico"
            method={"post"}
            action="controller/criar_servico.php"
            onRespose={(r: any) => {
                setMessage(r)
            }}
        >
            <h1 className="text-3xl">Criar Serviço</h1>


            <Input
                name="nome"
                type="text"
                label="Nome do serviço:"
            ></Input>
            <Input
                name="preco"
                type="number"
                label="Preço do serviço:"
            ></Input>


            <Input
                name="enviar"
                type="submit"
                label="Cadastrar"
            ></Input>
            {message.success && (<small className={"text-green-500 mb-2"}>{message.success}</small>)}
            {message.error && (<small className={"text-red-600 mb-2"}>{message.error}</small>)}
        </Form>
    );
}