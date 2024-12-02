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

$tipo = $data['tipo'];

$nome = $data['nome'];
$data_de_nascimento = $data['data_de_nascimento'];
$email = $data['email'];

$senha = $data['senha'];

$nome_do_banco = $data['nome_do_banco'];
$numero_da_agencia = $data['numero_da_agencia'];
$numero_da_conta = $data['numero_da_conta'];
$chave_pix = $data['chave_pix'];

if ($nome == "" || $data_de_nascimento == "" || $email == "") {
    die('{"die": "Preencha todos os campos"}');
}

$conn = Connection::con();

$sql_email = "SELECT email FROM usuarios WHERE email = '$email'";

$result = $conn->query($sql_email);

if ($result->num_rows > 0) {
    die('{"error": "Este email já existe!"}');
}

switch ($tipo) {
    case "CLIENTE":

        $sql_usuario = "INSERT INTO usuarios (nome, email, data_nascimento) VALUES ('$nome', '$email', '$data_de_nascimento')";

        if ($conn->query($sql_usuario)) {
            echo '{"success": "Usuário cadastrado com sucesso!"}';
        } else {
            echo '{"error": "' . $sql_usuario . $conn->error . '"}';
        }
        $conn->close();
        return;

    case "BARBEIRO":

        if ($nome_do_banco == "" || $numero_da_conta == "" || $numero_da_agencia == "" || $chave_pix == "") {
            die('{"die": "Preencha todos os campos"}');
        }


        $sql_usuario = "INSERT INTO usuarios (nome, email, data_nascimento) VALUES ('$nome', '$email', '$data_de_nascimento')";

        if (!$conn->query($sql_usuario)) {
            die('{"error": "' . $sql_usuario . $conn->error . '"}');
        }

        $id_select = "SELECT id FROM usuarios ORDER BY id DESC LIMIT 1";

        $result = $conn->query($id_select);

        $id_barbeiro = 0;

        if ($result->num_rows > 0) {
            if ($row = $result->fetch_assoc()) {
                $id_barbeiro = $row['id'];
            }
        } else {
            echo '{"error": "0 results"}';
            return;
        }

        $sql_dados_bancarios = "INSERT INTO barbeiros (id_usuario , pix , banco , agencia , conta) VALUES ('$id_barbeiro', '$chave_pix', '$nome_do_banco', '$numero_da_agencia', '$numero_da_conta')";

        if ($conn->query($sql_dados_bancarios)) {
            echo '{"success": "Barbeiro cadastrado com sucesso!"}';
        } else {
            echo '{"error": "' . $sql_dados_bancarios . $conn->error . '"}';
        }

        $conn->close();

        return;
    case "ADMINISTRADOR":
        if ($senha == "") {
            die('{"die": "Preencha todos os campos"}');
        }

        $sql_usuario = "INSERT INTO usuarios (nome, email, data_nascimento) VALUES ('$nome', '$email', '$data_de_nascimento')";

        if (!$conn->query($sql_usuario)) {
            die('{"error": "' . $sql_usuario . $conn->error . '"}');
        }

        $id_select = "SELECT id FROM usuarios ORDER BY id DESC LIMIT 1";

        $result = $conn->query($id_select);

        $id_adm = 0;

        if ($result->num_rows > 0) {
            if ($row = $result->fetch_assoc()) {
                $id_adm = $row['id'];
            }
        } else {
            echo '{"error": "0 results"}';
            return;
        }

        $sql_adm = "INSERT INTO administradores (id_usuario , senha) VALUES ('$id_adm', '$senha')";

        if ($conn->query($sql_adm)) {
            echo '{"success": "Administrador cadastrado com sucesso!"}';
        } else {
            echo '{"error": "' . $sql_adm . $conn->error . '"}';
        }

        $conn->close();


}