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

    if (!$conn) {
        die("Erro na conexão com o banco de dados.");
    }

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
    public $id_cliente;
    public $id_barbeiro;
    public $id_servico;
    public $dia_e_horario;

    public function __construct($id_cliente, $id_barbeiro, $id_servico, $dia_e_horario)
    {
        $this->id_cliente = $id_cliente;
        $this->id_barbeiro = $id_barbeiro;
        $this->id_servico = $id_servico;
        $this->dia_e_horario = $dia_e_horario;
    }

}