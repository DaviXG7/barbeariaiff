<?php

error_reporting("0");
ini_set('display_errors', '0');

include "../connection.php";

class Agenda
{
    public $id;
    public $nome_barbeiro;
    public $imagem_barbeiro;
    public $dia_semana;
    public $horario;

    public function __construct($id, $nome_barbeiro, $dia_semana, $horario, $imagem_barbeiro)
    {
        $this->dia_semana = $dia_semana;
        $this->horario = $horario;
        $this->id = $id;
        $this->nome_barbeiro = $nome_barbeiro;
        $this->imagem_barbeiro = $imagem_barbeiro;
    }

    public static function getAll(): array
    {
        $conn = Connection::con();

        $sql = "SELECT u.nome, a.dia, a.horario, u.imagem, a.id
        FROM agendas AS a
        INNER JOIN usuarios AS u
        ON u.id = a.id_barbeiro";

        $result = $conn->query($sql);

        $agendas = [];

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $agendas[] = new Agenda(
                    $row["id"],
                    $row["nome"],
                    $row["dia"],
                    $row["horario"],
                    $row['imagem']
                );

            }
        }

        return $agendas;

    }

    public static function delete($id)
    {
        $sql = "DELETE FROM agendas WHERE id = '$id'";

        $conn = Connection::con();

        if (!$conn->query($sql)) {
            echo "erro";
        }

    }

}

class BarbeirosDisponiveis
{
    public $id_agenda;
    public $nome_barbeiro;
    public $horario;

    public function __construct($id_agenda, $nome_barbeiro, $horario)
    {
        $this->horario = $horario;
        $this->id_agenda = $id_agenda;
        $this->nome_barbeiro = $nome_barbeiro;

    }

    public static function getAll($date): array
    {
        $dia = date('w', strtotime($date));

        $sql_disponivel = "
    SELECT a.id, a.horario, u.nome
    FROM agendas AS a
    INNER JOIN usuarios AS u
    ON u.id = a.id_barbeiro
    WHERE a.dia = '$dia'
    AND NOT EXISTS (
        SELECT 1
        FROM agendamentos AS ag
        WHERE ag.id_agenda = a.id
    )";

        $conn = Connection::con();

        $disponiveis = [];

        $result = $conn->query($sql_disponivel);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $disponiveis[] = new BarbeirosDisponiveis(
                    $row["id"],
                    $row["nome"],
                    $row["horario"]
                );
            }
        }

        return $disponiveis;
    }


}

class Agendamento
{
    public $id;
    public $data;
    public $horario;
    public $servico;
    public $nome_barbeiro;
    public $nome_cliente;
    public $email_cliente;
    public $imagem_cliente;

    public function __construct($id, $data, $horario, $servico, $nome_barbeiro, $nome_cliente, $email_cliente, $imagem_cliente)
    {
        $this->id = $id;
        $this->data = $data;
        $this->horario = $horario;
        $this->servico = $servico;
        $this->nome_barbeiro = $nome_barbeiro;
        $this->nome_cliente = $nome_cliente;
        $this->email_cliente = $email_cliente;
        $this->imagem_cliente = $imagem_cliente;
    }

    public static function getAll(): array
    {

        $conn = Connection::con();

        $sql_agenda = "
        SELECT
            ag.id AS id_agenda,
            ag.data AS data,
            ag.id_servico AS servico,
            a.horario AS hora,
            c.nome AS nome_cliente,
            c.email AS email_cliente,
            c.imagem AS imagem_cliente,
            b.nome AS nome_barbeiro
        FROM agendamentos AS ag
        INNER JOIN agendas as a
            ON a.id = ag.id_agenda
        INNER JOIN usuarios as c
            ON c.id = ag.id_cliente
        INNER JOIN usuarios as b
            ON b.id = a.id_barbeiro;
        ";

        $agendamentos = [];

        $result = $conn->query($sql_agenda);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $agendamentos[] = new Agendamento(
                    $row["id_agenda"],
                    $row["data"],
                    $row["hora"],
                    $row["servico"],
                    $row["nome_barbeiro"],
                    $row["nome_cliente"],
                    $row["email_cliente"],
                    $row["imagem_cliente"]
                );
            }
        }

        return $agendamentos;

    }

    public static function delete($id)
    {
        $sql = "DELETE FROM agendamentos WHERE id = '$id'";

        $conn = Connection::con();

        if (!$conn->query($sql)) {
            echo "erro";
        }
    }

public static function getToday(): array
{
    $conn = Connection::con();

    date_default_timezone_set('America/Sao_Paulo');
    $data = date("Y-m-d");

    $sql_agenda = "
        SELECT
            ag.id AS id_agenda,
            ag.data AS data,
            ag.id_servico AS servico,
            a.horario AS hora,
            c.nome AS nome_cliente,
            c.email AS email_cliente,
            c.imagem AS imagem_cliente,
            b.nome AS nome_barbeiro
        FROM agendamentos AS ag
        INNER JOIN agendas AS a
            ON a.id = ag.id_agenda
        INNER JOIN usuarios AS c
            ON c.id = ag.id_cliente
        INNER JOIN usuarios AS b
            ON b.id = a.id_barbeiro
        WHERE ag.data = '$data';
    ";

    $agendamentos = [];

    $result = $conn->query($sql_agenda);

    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $agendamentos[] = new Agendamento(
                $row["id_agenda"],
                $row["data"],
                $row["hora"],
                $row["servico"],
                $row["nome_barbeiro"],
                $row["nome_cliente"],
                $row["email_cliente"],
                $row["imagem_cliente"]
            );
        }
    }

    return $agendamentos;
}


}