<?php
$nome = $_POST['localName'];
$tipo = $_POST['localType'];
$descricao = $_POST['localDesc'];
$regiao = $_POST['localRegion'];
$cor = $_POST['localTema'];

/*
$imagem = $_POST['localImage'];
$fundo = $_POST['localBackground'];
*/

$jogo = $_POST['localGame'];

if ($jogo > 0) {
    $_con = mysqli_connect('127.0.0.1','root','','bd_pw_pokedex');
    if($_con === FALSE) {
        echo "Não foi possível conectar ao Servidor de banco de dados.";
    } else {
        echo "Foi possível conectar ao Servidor de banco de dados.";
    
        $query = "INSERT INTO localizacao
        (loca_nome,
        loca_tipo,
        loca_desc,
        loca_regiao,
        loca_cor)
        VALUES 
        ('{$nome}',  
        '{$tipo}', 
        '{$descricao}', 
        '{$regiao}', 
        '{$cor}')"; 
        
        $result = mysqli_query($_con, $query);
    
        $query = "INSERT INTO localizacao_jogo
        (fk_loca_id,
        fk_jogo_id)
        VALUES
        ((select max(loca_id) from localizacao),
        {$jogo});
        ";
    
        $result = mysqli_query($_con, $query);
        mysqli_close($_con);
    }
} else {
    echo "Preencha todas as caixas de seleção";
}

?>