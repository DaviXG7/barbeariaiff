<?php

include "connection.php";
include "model/usuario.php";
include "model/agendas.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

error_reporting("0");
ini_set('display_errors', '0');

$tipo = $_GET['tipo'];

switch ($tipo) {
    case "usuarios": {
        echo json_encode(Usuario::getAll(), JSON_PRETTY_PRINT);
        return;
    }
    case "administradores": {
        echo json_encode(ADM::getAll(), JSON_PRETTY_PRINT);
        return;
    }
    case "barbeiros": {
        echo json_encode(Barbeiro::getAll(), JSON_PRETTY_PRINT);
        return;
    }
    case "clientes": {
        echo json_encode(Usuario::getAllClientes(), JSON_PRETTY_PRINT);
        return;
    }
    case "agendas": {

        if ($_GET["delete"] != "") {
            Agenda::delete($_GET["delete"]);

            echo json_encode(Agenda::getAll(), JSON_PRETTY_PRINT);

            return;
        }

        echo json_encode(Agenda::getAll(), JSON_PRETTY_PRINT);
        return;
    }
    case "disponivel": {
        echo json_encode(BarbeirosDisponiveis::getAll($_GET['dia']), JSON_PRETTY_PRINT);
        return;
    }
    case "user": {
        echo json_encode(Usuario::getUser($_GET["id"]), JSON_PRETTY_PRINT);
        return;
    }
}

