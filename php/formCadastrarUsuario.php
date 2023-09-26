<?php 
$apelido = $_POST['userName'];
$nomeReal = $_POST['userRealName'];
$email = $_POST['userEmail'];
$telefone = $_POST['userPhone'];
$nascimento = $_POST['userDate'];
$senha = $_POST['userPass'];

$_con = mysqli_connect('127.0.0.1','root','','bd_pw_pokedex');
if($_con === FALSE) {
    echo "Não foi possível conectar ao Servidor de banco de dados.";
} else {
    echo "Foi possível conectar ao Servidor de banco de dados.";

    $query = "INSERT INTO Usuario
    (usua_apelido,
    usua_nome_real,
    usua_email,
    usua_telefone,
    usua_nascimento,
    usua_senha) 
    VALUES 
    ('{$apelido}',  
    '{$nomeReal}', 
    '{$email}', 
    '{$telefone}', 
    '{$nascimento}', 
    '{$senha}')";

    $result = mysqli_query($_con, $query);
    mysqli_close($_con);
}
?>