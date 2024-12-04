<?php
include "../connection.php";

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

ini_set('display_errors', '0');
error_reporting("0");

if ($_SERVER['REQUEST_METHOD'] != "POST") {
    die('{"error": "Use método POST"}');
}

$conn = Connection::con();

$nome = $_POST['nome'];
$valor = $_POST['preco'];

$sql_servicos = "INSERT INTO servicos (nome, preco)
VALUES ('$nome', '$valor')";

if ($conn->query($sql_servicos)) {
    echo '{"success": "Serviço incluido com sucesso!"}';
} else {
    echo '{"error": "' . $sql_servicos . $conn->error . '"}';
}

$conn->close();