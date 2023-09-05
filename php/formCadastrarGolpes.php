<?php 
$nome = $_POST['golpeName'];
$dano = $_POST['golpeDano'];
$pp = $_POST['golpePP'];
$precisao = $_POST['golpePrecisao'];
$descricao = $_POST['golpeDesc'];
$tipoFk = $_POST['golpeType'];

$_con = mysqli_connect('127.0.0.1','root','root','bd_pw_pokedex');
if($_con === FALSE) {
    echo "Não foi possível conectar ao Servidor de banco de dados ";
} else {
    echo "Foi possível conectar ao Servidor de banco de dados ";

    $query = "INSERT INTO Golpe 
    (golp_nome,
    golp_dano
    golp_pp,
    golp_precisao,
    golp_descricao, 
    fk_tipo_id) 
    VALUES 
    ('Investida', 
    30, 
    30, 
    95, 
    'Atinge um inimigo com uma investida poderosa!', 
    10)";

    $result = mysqli_query($_con, $query);
    mysqli_close($_con);
}
?>