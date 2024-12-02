<?php

error_reporting("0");
ini_set('display_errors', '0');

include "../connection.php";


class Usuario
{
    public $id;
    public $nome;
    public $email;
    public $imagem;
    public $data_de_nascimento;

    public function __construct($id, $nome, $email, $imagem, $data_de_nascimento)
    {
        $this->nome = $nome;
        $this->email = $email;
        $this->imagem = $imagem;
        $this->data_de_nascimento = $data_de_nascimento;
        $this->id = $id;
    }

    public static function getAll(): array
    {
        $conn = Connection::con();

        $sql = "SELECT * FROM usuarios";

        $result = $conn->query($sql);

        $users = [];

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $users[] = new Usuario($row["id"], $row["nome"], $row["email"], $row["imagem"], $row["data_nascimento"]);
            }
        }

        return $users;
    }

    public static function getAllClientes(): array
    {
        $conn = Connection::con();

        $sql = "SELECT * FROM usuarios WHERE id NOT IN (SELECT id_usuario FROM barbeiros UNION SELECT id_usuario FROM administradores);";

        $result = $conn->query($sql);

        $users = [];

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $users[] = new Usuario($row["id"], $row["nome"], $row["email"], $row["imagem"], $row["data_nascimento"]);
            }
        }

        return $users;
    }

    public static function getUser($id): ?Usuario
    {
        $conn = Connection::con();

        $sql = "SELECT * FROM usuarios WHERE id = " . $id;

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            if ($row = $result->fetch_assoc()) {
                return new Usuario($row["id"], $row["nome"], $row["email"], $row["imagem"], $row["data_nascimento"]);
            }
        }

        return null;
    }


}

class ADM extends Usuario
{
    private $senha;

    public function __construct($id, $nome, $email, $imagem, $data_de_nascimento, $senha)
    {
        parent::__construct($id, $nome, $email, $imagem, $data_de_nascimento);
        $this->senha = $senha;
    }


    public static function getAll(): array
    {
        $conn = Connection::con();

        $sql = "SELECT * FROM usuarios as u INNER JOIN administradores as a ON u.id = a.id_usuario";

        $result = $conn->query($sql);

        $users = [];

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $users[] = new ADM($row["id_usuario"], $row["nome"], $row["email"], $row["imagem"], $row["data_nascimento"], $row["senha"]);
            }
        }

        return $users;
    }
}

class Barbeiro extends Usuario
{
    public $pix;
    public $banco;
    public $agencia;
    public $conta;

    public function __construct($id, $nome, $email, $imagem, $data_de_nascimento, $pix, $banco, $agencia, $conta)
    {
        parent::__construct($id, $nome, $email, $imagem, $data_de_nascimento);

        $this->agencia = $agencia;
        $this->conta = $conta;
        $this->banco = $banco;
        $this->pix = $pix;


    }

    public static function getAll(): array
    {
        $conn = Connection::con();

        $sql = "SELECT * FROM usuarios as u INNER JOIN barbeiros as b ON u.id = b.id_usuario";

        $result = $conn->query($sql);

        $users = [];

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $users[] = new Barbeiro($row["id_usuario"], $row["nome"], $row["email"], $row["imagem"], $row["data_nascimento"], $row['pix'], $row['banco'], $row['agencia'], $row['conta']);
            }
        }

        return $users;
    }
}
