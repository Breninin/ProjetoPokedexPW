<?php 
$tipoAtkFk = $_POST['typeAttacker'];
$tipoDefFk = $_POST['typeDefender'];

if ($tipoAtkFk > 0 && $tipoDefFk > 0) {
    $_con = mysqli_connect('127.0.0.1','root','','bd_pw_pokedex');
    if($_con === FALSE) {
        echo "Não foi possível conectar ao Servidor de banco de dados.";
    } else {
        echo "Foi possível conectar ao Servidor de banco de dados.";
    
        $query = "INSERT INTO Fraqueza
        (fk_fraq_tipo_atk_id,
        fk_fraq_tipo_def_id) 
        VALUES 
        ({$tipoAtkFk},  
        {$tipoDefFk})";
    
        $result = mysqli_query($_con, $query);
        mysqli_close($_con);
    }
} else {
    echo "Preencha todas as caixas de seleção";
}
?>