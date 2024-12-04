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

$nome = $_POST['nome'];
$data_de_nascimento = $_POST['data'];
$imagem = $_FILES['imagem'];

$nome_do_banco = $_POST['nome_banco'];
$numero_da_agencia = $_POST['numero_agencia'];
$numero_da_conta = $_POST['numero_conta'];
$chave_pix = $_POST['pix'];


$conn = Connection::con();
if ($nome == "" || $data_de_nascimento == "") {
    die('{"error": "Preencha todos os campos"}');
}

if ($_GET['barbeiro'] == "true") {

    if ($nome_do_banco == "" || $numero_da_agencia == "" || $numero_da_conta == "" || $chave_pix == "") {
        die('{"error": "Preencha todos os campos"}');
    }

    $imagem_64 = null;
    $update_image = "";

    if ($_FILES['imagem']['size']) {
        $fileContent = file_get_contents($imagem['tmp_name']);

        $imagem_64 = "data:image/*;base64," . base64_encode($fileContent);
        $update_image = ", imagem = '$imagem_64'";

    }
    $sql_usuario = "UPDATE usuarios SET nome = '$nome', data_nascimento = '$data_de_nascimento' $update_image WHERE id = " . $_GET['id'] . ";";

    if (!$conn->query($sql_usuario)) {
        die('{"error": "' . $sql_usuario . $conn->error . '"}');
    }

    $sql_barbeiro = "UPDATE barbeiros SET pix = '$chave_pix', banco = '$nome_do_banco', agencia = '$numero_da_agencia', conta = '$numero_da_conta' WHERE id_usuario = " . $_GET['id'] . ";";

    if ($conn->query($sql_barbeiro)) {
        echo '{"success": "Barbeiro editado com sucesso!"}';
    } else {
        echo '{"error": "' . $sql_barbeiro . $conn->error . '"}';
    }
    $conn->close();
    return;
}
$imagem_64 = null;
$update_image = "";

if ($_FILES['imagem']['size']) {
    $fileContent = file_get_contents($imagem['tmp_name']);

    $imagem_64 = "data:image/*;base64," . base64_encode($fileContent);
    $update_image = ", imagem = '$imagem_64'";

}
$sql_usuario = "UPDATE usuarios SET nome = '$nome', data_nascimento = '$data_de_nascimento' $update_image WHERE id = " . $_GET['id'] . ";";

if ($conn->query($sql_usuario)) {
    echo '{"success": "Usuario editado com sucesso!"}';
} else {
    echo '{"error": "' . $sql_usuario . $conn->error . '"}';
}
$conn->close();