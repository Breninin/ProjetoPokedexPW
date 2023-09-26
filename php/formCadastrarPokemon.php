<?php 
//Inserir na tabela Pokémon
$nome = $_POST['pokeName'];
$dex = $_POST['pokeDexNumber'];
$tamanho = $_POST['pokeSize'];
$peso = $_POST['pokeWeight'];

$hp = $_POST['pokeStatHp'];
$atk = $_POST['pokeStatAtk'];
$def = $_POST['pokeStatDef'];
$spAtk = $_POST['pokeStatSpAtk'];
$spDef = $_POST['pokeStatSpDef'];
$speed = $_POST['pokeStatSpeed'];

$tipoPrimario = $_POST['pokeTypePrimary'];
$tipoSecundario = $_POST['pokeTypeSecondary'];

//Inserir na tabela Pokémon_Sexo
$chanceMasc = $_POST['pokeChanceMasc'];
$chanceFem = $_POST['pokeChanceFem'];

//Inserir na tabela Pokémon_GrupoOvos
$grupoPrimario = $_POST['pokeEggPrimary'];
$grupoSecundario = $_POST['pokeEggSecondary'];

//Inserir na tabela Pokémon_Jogo
$descRed = $_POST['pokeDescRed'];
$descBlue = $_POST['pokeDescBlue'];
$descYellow = $_POST['pokeDescYellow'];
$descGold = $_POST['pokeDescGold'];
$descSilver = $_POST['pokeDescSilver'];
$descCrystal = $_POST['pokeDescCrystal'];

if ($tipoPrimario > 0 && $tipoSecundario > 0 &&
    $grupoPrimario > 0 && $grupoSecundario > 0) {
    $_con = mysqli_connect('127.0.0.1','root','','bd_pw_pokedex');
    if($_con === FALSE) {
        echo "Não foi possível conectar ao Servidor de banco de dados.";
    } else {
        echo "Foi possível conectar ao Servidor de banco de dados.";
    
        //### Insert na tablela Pokémon ###
        $query = "INSERT INTO Pokemon
        (poke_nome,
        poke_numero_dex,
        poke_tamanho,
        poke_peso,
        poke_stat_hp,
        poke_stat_atk,
        poke_stat_def,
        poke_stat_sp_atk,
        poke_stat_sp_def,
        poke_stat_speed,
        fk_tipo_primario_id,
        fk_tipo_secundario_id)
        VALUES 
        ('{$nome}',
        {$dex},
        '{$tamanho}m',
        '{$peso}kg',
        {$hp},
        {$atk},
        {$def},
        {$spAtk},
        {$spDef},
        {$speed},
        {$tipoPrimario},
        {$tipoSecundario})";
    
        $result = mysqli_query($_con, $query);
    
        //### Inserts na tablela Pokémon_Sexo ###
    
        $query = "INSERT INTO Pokemon_Sexo
        (pnso_chance_sexo,
        fk_poke_id,
        fk_sexo_id)
        VALUES 
        ('{$chanceMasc}%',
        (select max(poke_id) from pokemon),
        1)";
    
        $result = mysqli_query($_con, $query);
    
        $query = "INSERT INTO Pokemon_Sexo
        (pnso_chance_sexo,
        fk_poke_id,
        fk_sexo_id)
        VALUES 
        ('{$chanceFem}%',
        (select max(poke_id) from pokemon),
        2)";
    
        $result = mysqli_query($_con, $query);
    
        //### Inserts na tablela Pokémon_GrupoOvos ###
    
        $query = "INSERT INTO Pokemon_GrupoOvos
        (fk_poke_id,
        fk_ovos_id)
        VALUES 
        ((select max(poke_id) from pokemon),
        '{$grupoPrimario}%')";
    
        $result = mysqli_query($_con, $query);
    
        $query = "INSERT INTO Pokemon_GrupoOvos
        (fk_poke_id,
        fk_ovos_id)
        VALUES 
        ((select max(poke_id) from pokemon),
        '{$grupoSecundario}%')";
    
        $result = mysqli_query($_con, $query);
    
        //### Inserts na tablela Pokémon_Jogo ###
    
        $query = "INSERT INTO Pokemon_Jogo
        (pojo_descricao_dex,
        fk_poke_id,
        fk_jogo_id)
        VALUES 
        ('{$descRed}',
        (select max(poke_id) from pokemon),
        1)";
    
        $result = mysqli_query($_con, $query);
    
        $query = "INSERT INTO Pokemon_Jogo
        (pojo_descricao_dex,
        fk_poke_id,
        fk_jogo_id)
        VALUES 
        ('{$descBlue}',
        (select max(poke_id) from pokemon),
        2)";
    
        $result = mysqli_query($_con, $query);
    
        $query = "INSERT INTO Pokemon_Jogo
        (pojo_descricao_dex,
        fk_poke_id,
        fk_jogo_id)
        VALUES 
        ('{$descYellow}',
        (select max(poke_id) from pokemon),
        3)";
    
        $result = mysqli_query($_con, $query);
    
        $query = "INSERT INTO Pokemon_Jogo
        (pojo_descricao_dex,
        fk_poke_id,
        fk_jogo_id)
        VALUES 
        ('{$descGold}',
        (select max(poke_id) from pokemon),
        4)";
    
        $result = mysqli_query($_con, $query);
    
        $query = "INSERT INTO Pokemon_Jogo
        (pojo_descricao_dex,
        fk_poke_id,
        fk_jogo_id)
        VALUES 
        ('{$descSilver}',
        (select max(poke_id) from pokemon),
        5)";
    
        $result = mysqli_query($_con, $query);
    
        $query = "INSERT INTO Pokemon_Jogo
        (pojo_descricao_dex,
        fk_poke_id,
        fk_jogo_id)
        VALUES 
        ('{$descCrystal}',
        (select max(poke_id) from pokemon),
        6)";
    
        $result = mysqli_query($_con, $query);
    
        mysqli_close($_con);
    }
} else {
    echo "Preencha todas as caixas de seleção";
}
?>