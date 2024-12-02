<?php
include "../connection.php";


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


$data = json_decode(file_get_contents('php://input'), true);

ini_set('display_errors', '0');
error_reporting("0");


$inicio = strtotime($data['inicio']);
$inicio_intervalo = strtotime($data['inicio_intervalo']);
$final_intervalo = strtotime($data['fim_intervalo']);
$final = strtotime($data['fim']);

$dia = $data['dia_da_semana'];
$id_usuario = $data['barbeiro'];
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
