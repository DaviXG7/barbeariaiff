import "./lista.css";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

async function getJson(url: string): Promise<[{
    data_de_nascimento: string;
  email: string | undefined;
  nome: string | undefined;
  imagem: string | undefined;
  id: string | undefined;
  pix: string | undefined;
}] > {
  const response = await fetch("http://localhost/" + url)


  return response.json()
}


export default function Usuarios() {

    const [json, setJson] = useState<
        Array<{ data_de_nascimento: string; imagem: string | undefined; nome: string | undefined; email: string | undefined; id: string | undefined; pix: string | undefined;}>
    >([]);

    useEffect(() => {
        getJson("api.php?tipo=usuarios").then((r) => {
            setJson(r);
        });
    }, []);

    console.log(json);

    return (
        <div className="lista">
            <div className="flex mb-1 gap-3">
                <button
                    className="btn"
                    onClick={() =>
                        getJson("api.php?tipo=usuarios").then((r) => {
                            setJson(r);
                        })
                    }
                >
                    Todos os usuários
                </button>
                <button
                    className="btn"
                    onClick={() =>
                        getJson("api.php?tipo=barbeiros").then((r) => {
                            setJson(r);
                        })
                    }
                >
                    Barbeiros
                </button>
                <button
                    className="btn"
                    onClick={() =>
                        getJson("api.php?tipo=clientes").then((r) => {
                            setJson(r);
                        })
                    }
                >
                    Clientes
                </button>
            </div>

            <div className="flex justify-around w-full bg-white border-b border-b-black p-1">
                <p className="w-1/5 text-center">Imagem</p>
                <p className="w-1/5 text-center">Nome</p>
                <p className="w-1/5 text-center">Email</p>
                <p className="w-1/5 text-center">Data nascimento</p>
                <p className="w-1/5 text-center">Editar</p>
            </div>

            {json.map((user, index) => (
                <div
                    key={index} // Adicione uma `key` única para cada elemento da lista
                    className="flex justify-around items-center w-full border-b border-b-gray p-1 bg-white"
                >
                    <img
                        className="sm:w-32 sm:h-32 w-12 h-12"
                        width={100}
                        height={100}
                        src={user.imagem}
                        alt={user.nome}
                    ></img>
                    <p className="sm:w-32 w-12 text-center flex-wrap">{user.nome}</p>
                    <p className="sm:w-32 w-12 text-center flex-wrap">{user.email}</p>
                    <p className="sm:w-32 w-12 text-center flex-wrap">{user.data_de_nascimento}</p>
                    <div className="sm:w-32 w-12 flex items-center justify-center">
                        <Link className="btn" to={"/usuario/editar/" + user.id + "/" + (user.pix !== undefined)}>Editar</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
