<?php

include "../connection.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$data = json_decode(file_get_contents('php://input'), true);

ini_set('display_errors', '0');
error_reporting("0");

if ($_SERVER['REQUEST_METHOD'] != "POST") {
    die('{"error": "Use método POST"}');
}

$cliente = $data['cliente'] ?? null;
$servico = $data['servico'] ?? null;
$dia = $data['dia'] ?? null;
$barbeiro = $data['barbeiro'] ?? null;

if (empty($cliente) || empty($servico) || empty($dia) || empty($barbeiro)) {
    die('{"error": "Preencha todos os espaços"}');
}

$conn = Connection::con();

if (!$conn) {
    die('{"error": "Erro na conexão com o banco de dados"}');
}

$sql_agendamento = "
    INSERT INTO agendamentos (id_cliente, id_agenda, id_servico, data)
    VALUES ('$cliente', '$barbeiro', '$servico', '$dia');
";

if ($conn->query($sql_agendamento)) {
    echo '{"success": "Serviço requisitado com sucesso!"}';
} else {
    echo '{"error": "Erro na consulta SQL: ' . $conn->error . '"}';
}
