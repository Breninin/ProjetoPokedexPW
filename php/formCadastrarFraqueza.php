<?php 
$_con = mysqli_connect('127.0.0.1','root','','bd_php5');
if($_con===FALSE) {
    echo "Não foi possível conectar ao Servidor de banco de dados ";
} else {
    echo "Foi possível conectar ao Servidor de banco de dados ";
    $query = "insert into Fraqueza (fk_fraq_tipo_atk_id, fk_fraq_tipo_def_id) values ()";
    $result = mysqli_query($_con, $query);
    mysqli_close($_con);
}
?>