<?php 
$nome = $_POST['golpeName'];
$dano = $_POST['golpeDano'];
$pp = $_POST['golpePP'];
$precisao = $_POST['golpePrecisao'];
$descricao = $_POST['golpeDesc'];
$tipoFk = $_POST['golpeType'];

if ($tipoFk > 0) {
    $_con = mysqli_connect('127.0.0.1','root','','bd_pw_pokedex');
    if($_con === FALSE) {
        echo "Não foi possível conectar ao Servidor de banco de dados.";
    } else {
        echo "Foi possível conectar ao Servidor de banco de dados.";

        $query = "INSERT INTO Golpe
        (golp_nome,
        golp_dano,
        golp_pp,
        golp_precisao,
        golp_descricao, 
        fk_tipo_id) 
        VALUES 
        ('{$nome}', 
        {$dano}, 
        {$pp}, 
        {$precisao}, 
        '{$descricao}', 
        {$tipoFk})";

        $result = mysqli_query($_con, $query);
        mysqli_close($_con);
    }
} else {
    echo "Preencha todas as caixas de seleção";
}
?>