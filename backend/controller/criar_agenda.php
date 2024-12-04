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


$inicio = strtotime($_POST['inicio']);
$inicio_intervalo = strtotime($_POST['inicio_intervalo']);
$final_intervalo = strtotime($_POST['fim_intervalo']);
$final = strtotime($_POST['fim']);

$dia = $_POST['dia_da_semana'];
$id_usuario = $_POST['barbeiro'];
$mins = ($inicio - $inicio_intervalo) / 60;
if($mins < 0)
    $mins = $mins*(-1);


$conn = Connection::con();

$qnt_de_agendamento = $mins/30;

$acumulado = $inicio;

for($i = 0; $i < $qnt_de_agendamento; $i++){

    $horario = date('H:i', $acumulado);
    incluirAgenda($dia, $id_usuario, $horario, $conn);
    $acumulado = $acumulado + 1800;
}

function incluirAgenda($dia, $id_usuario, $horario, $conn){

    $sql_agenda = "INSERT INTO agendas (dia , id_barbeiro, horario)
    VALUES ($dia, $id_usuario, '$horario')";

    if (!$conn->query($sql_agenda)) {
        die('{"error": "' . $$sql_agenda . $conn->error . '"}');
    }
}

$mins = ($final_intervalo - $final) / 60;

if($mins < 0)
    $mins = $mins*(-1);

$qnt_de_agendamento = $mins/30;

$acumulado = $final_intervalo;

for ($i = 0; $i < $qnt_de_agendamento; $i++) {
    $horario = date('H:i', $acumulado);
    incluirAgenda($dia, $id_usuario, $horario, $conn);
    $acumulado = $acumulado + 1800;
}

echo '{"success": "Agenda cadastrada com sucesso!"}';
