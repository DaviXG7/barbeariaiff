<?php

include "../connection.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$data = json_decode(file_get_contents('php://input'), true);

ini_set('display_errors', '0');
error_reporting("0");


$cliente = $data['cliente'];
$servico = $data['servico'];
$dia = $data['dia'];
$barbeiro = $data['barbeiro'];

if ($cliente == "" || $servico == "" || $dia == "" || $barbeiro == "") {
    die('{"error": "Use método POST"}');
}

$conn = Connection::con();

$sql_agendamento = "INSERT INTO agendamentos (id_cliente, id_agenda, id_servico, data) VALUES ('$cliente', '$barbeiro', '$dia', '$barbeiro')"

if ($conn->query($sql_agendamento)) {
    echo '{"success": "Serviço requisitado com sucesso!"}';
} else {
    echo '{"error": "' . $sql_agendamento . $conn->error . '"}';
}