<?php
$nome = $_POST['treiName'];
$descricao = $_POST['treiDesc'];
$idade = $_POST['treiAge'];
$cor = $_POST['treiTema'];

/*
$imagem = $_POST['treiImage'];
$fundo = $_POST['treiBackground'];
*/

$jogo = $_POST['treiGame'];

if ($jogo > 0) {
    $_con = mysqli_connect('127.0.0.1','root','','bd_pw_pokedex');
    if($_con === FALSE) {
        echo "Não foi possível conectar ao Servidor de banco de dados.";
    } else {
        echo "Foi possível conectar ao Servidor de banco de dados.";
    
        $query = "INSERT INTO treinador
        (trei_nome,
        trei_desc,
        trei_idade,
        trei_cor)
        VALUES 
        ('{$nome}',  
        '{$descricao}', 
        {$idade},  
        '{$cor}')"; 
        
        $result = mysqli_query($_con, $query);
    
        $query = "INSERT INTO treinador_jogo
        (fk_trei_id,
        fk_jogo_id)
        VALUES
        ((select max(trei_id) from treinador),
        {$jogo});
        ";
    
        $result = mysqli_query($_con, $query);
        mysqli_close($_con);
    }
} else {
    echo "Preencha todas as caixas de seleção";
}

?>