import Input from "../defaults/Input";
import "./editarusuario.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../defaults/Form";

async function getJson(url: string): Promise<{
    email: string;
    nome: string;
    imagem: string;
    id: string;
    pix: string;
    banco: string;
    agencia: string;
    conta: string;
}> {
    const response = await fetch("http://localhost/" + url);
    return await response.json();
}

export default function EditarUsuario() {
    const [message, setMessage] = useState({ success: "", error: "" });
    const { id, barbeiro } = useParams();
    const [user, setUser] = useState({
        email: "",
        nome: "",
        imagem: "",
        id: "",
        pix: "",
        banco: "",
        agencia: "",
        conta: "",
    });
    const [image, setImage] = useState("https://avatars.githubusercontent.com/u/42486346?v=4");

    useEffect(() => {
        getJson("ParteDavi/api.php?tipo=" + (barbeiro === "true" ? "barbeiro" : "usuario") + "&id=" + id).then((data) => {
            setUser(data);
            if (data.imagem) setImage(data.imagem);
        });
    }, [id, barbeiro]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Form
            styles="editar"
            action={"ParteDavi/controller/editar_usuario.php?user_id=" + id + "&barbeiro=" + barbeiro}
            id={"editar"}
            method={"post"}
            onRespose={(r: any) => {
                setMessage(r);
            }}
        >
            <div className={"flex mb-2 sm:flex-row flex-col items-center"}>
                <div className={"flex flex-col w-full items-center"}>
                    <img
                        src={image}
                        alt="Sem imagem do germano"
                        style={{ height: "240px", width: "240px", borderRadius: "10px" }}
                    />
                    <Input
                        name={"imagem"}
                        type={"file"}
                        placeholder={"Digite o novo nome"}
                        label={"Selecione uma imagem:"}
                        accept=".jpg,.jpeg,.png"
                        onChange={(event) => {
                            const file = event.target.files ? event.target.files[0] : null;

                            if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    setImage(reader.result as string);
                                };
                                reader.readAsDataURL(file);
                            }
                        }}
                    />
                </div>

                <div className={"flex flex-col w-full"}>
                    <Input
                        name={"nome"}
                        type={"text"}
                        placeholder={"Digite o novo nome"}
                        label={"Nome:"}
                        value={user.nome}
                        onChange={handleInputChange}
                    />
                    <Input
                        name={"email"}
                        type={"text"}
                        placeholder={"email"}
                        label={"Email:"}
                        value={user.email}
                        disabled={true}
                    />
                </div>
            </div>

            {barbeiro === "true" && (
                <div className={"flex flex-wrap flex-col w-full"}>
                    <div className={"flex justify-between"}>
                        <Input
                            name={"pix"}
                            type={"text"}
                            placeholder={"Digite a nova chave pix"}
                            label={"Chave PIX:"}
                            value={user.pix}
                            onChange={handleInputChange}
                        />
                        <Input
                            name={"nome_banco"}
                            type={"text"}
                            placeholder={"Digite o novo nome do Banco"}
                            label={"Nome do banco:"}
                            value={user.banco}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={"flex justify-between"}>
                        <Input
                            name={"numero_conta"}
                            type={"number"}
                            placeholder={"Digite o novo número da conta"}
                            label={"Número da conta:"}
                            value={user.conta}
                            onChange={handleInputChange}
                        />
                        <Input
                            name={"numero_agencia"}
                            type={"number"}
                            placeholder={"Digite o novo número da agência"}
                            label={"Número da agencia:"}
                            value={user.agencia}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            )}

            <button className="btn" id="b1">
                Editar
            </button>
            {message.success && <small className={"text-green-500 mb-2"}>{message.success}</small>}
            {message.error && <small className={"text-red-600 mb-2"}>{message.error}</small>}
        </Form>
    );
}
