let nomeHeroi = document.getElementById("hero").value;

function calcularElo(){
    let xp = parseInt(document.getElementById("xp").value);

    let elo;
    if (xp <= 1000){
        elo = "ferro";
    }else if (xp > 1001 && xp <= 2000){
        elo = "bronze";
    }else if (xp > 2001 && xp <= 5000){
        elo = "prata";
    }else if (xp > 5001 && xp <= 7000){
        elo = "ouro";
    }else if (xp > 7001 && xp <= 8000){
        elo = "platina ou diamante";
    }else if (xp > 8001 && xp <= 9000){
        elo = "ascendente";
    }else if (xp > 9001 && xp <= 10000){
        elo = "imortal";
    }else{
        elo = "radiante";
    }
    resultado.innerText = `O Herói de nome ${nomeHeroi} está no elo ${elo}`
    // torna os inputs vazios após chamar a função
    document.getElementById("xp").value = "";
    document.getElementById("hero").value = "";
}

