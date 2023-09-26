<?php 
$tipoAtkFk = $_POST['typeAttacker'];
$tipoDefFk = $_POST['typeDefender'];

$imunidade;

if (array_key_exists('typeDefenderImmunity', $_POST)) {
    $imunidade = true;
} else {
    $imunidade = false;
}

if ($tipoAtkFk > 0 && $tipoDefFk > 0) {
    $_con = mysqli_connect('127.0.0.1','root','','bd_pw_pokedex');
    if($_con === FALSE) {
        echo "Não foi possível conectar ao Servidor de banco de dados.";
    } else {
        echo "Foi possível conectar ao Servidor de banco de dados.";
    
        $query = "INSERT INTO Resistencia
        (fk_rest_tipo_atk_id,
        fk_rest_tipo_def_id,
        rest_imunidade) 
        VALUES 
        ({$tipoAtkFk},  
        {$tipoDefFk}, 
        '{$imunidade}')";
    
        $result = mysqli_query($_con, $query);
        mysqli_close($_con);
    }
} else {
    echo "Preencha todas as caixas de seleção";
}

?>