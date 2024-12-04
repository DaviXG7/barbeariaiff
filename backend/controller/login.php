<?php

include "../connection.php";

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

ini_set('session.cookie_path', '/');
ini_set('session.cookie_secure', '0');
ini_set('session.cookie_httponly', '1');
ini_set('session.use_only_cookies', '1');

session_start();

ini_set('display_errors', '0');
error_reporting("0");


if ($_SERVER['REQUEST_METHOD'] != "POST") {
    die('{"error": "Use método POST"}');
}

$email = $_POST['email'];
$senha = $_POST['senha'];

$conn = Connection::con();

$sql = "SELECT u.id FROM usuarios as u INNER JOIN administradores as a ON u.id = a.id_usuario WHERE u.email = '$email' AND a.senha = '$senha' LIMIT 1";

$result = $conn->query($sql);

$id = "";
if ($result->num_rows > 0) {
    if ($row = $result->fetch_assoc()) {
        $id = $row['id'];
        $_SESSION['id'] = $id;
    }
} else {
    die('{"error": "Email ou senha inválida!"}');
}



echo '{"success": "Usuário autorizado!", "id": "'.$id.'"}';