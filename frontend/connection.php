<?php
class Connection {

    public static $servername ="localhost";
    public static $username ="root";
    public static $password ="root";
    public static $dbname ="barbeariaiffdavi";

    public static function con()
    {
        $conn = new mysqli(
            self::$servername,
            self::$username,
            self::$password,
            self::$dbname
        );
        if ($conn->connect_error)
            die("Conexão não estabelecida");
        return $conn;
    }
}



?>