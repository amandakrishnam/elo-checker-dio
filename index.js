function calcularElo(){
    let nomeHeroi = document.getElementById("hero").value;
    let xp = parseInt(document.getElementById("xp").value);

    let elo;
    if (xp <= 1000){
        elo = "ferro";
    }else if (xp <= 2000){
        elo = "bronze";
    }else if (xp <= 5000){
        elo = "prata";
    }else if (xp <= 7000){
        elo = "ouro";
    }else if (xp <= 8000){
        elo = "platina ou diamante";
    }else if (xp <= 9000){
        elo = "ascendente";
    }else if (xp <= 10000){
        elo = "imortal";
    }else{
        elo = "radiante";
    }

    resultado = document.getElementById("resultado")
    resultado.innerText = `O Herói de nome ${nomeHeroi} está no elo ${elo}`
    // torna os inputs vazios após chamar a função
    document.getElementById("xp").value = "";
    document.getElementById("hero").value = "";
}

