function createGroup(group, teams) {
    return `
    <div class="grupo">
    <h1>${group}</h1>
    <ul>
        ${teams}
    </ul>
</div>
    `
}

function createNames(flag1, flag2, flag3, flag4, nome1, nome2, nome3, nome4){
    return `
    <li>
    <img src="./assets/icon-${flag1}.svg" alt="icon-${flag1}"> 
    <h2><span> ${nome1}</span></h2>
    </li>
    <li>
    <img src="./assets/icon-${flag2}.svg" alt="icon-${flag2}"> 
    <h2><span> ${nome2}</span></h2>
    </li>
    <li>
    <img src="./assets/icon-${flag3}.svg" alt="icon-${flag3}"> 
    <h2><span> ${nome3}</span></h2>
    </li>
    <li>
    <img src="./assets/icon-${flag4}.svg" alt="icon-${flag4}"> 
    <h2><span> ${nome4}</span></h2>
    </li>
`
}

document.querySelector('#grupos').innerHTML =

    createGroup("GRUPO A", 
        createNames("Qatar", "Ecuador", "Senegal", "Netherlands", "QATAR", "EQUADOR", "SENEGAL", "HOLANDA" )) +

    createGroup("GRUPO B", 
        createNames("England", "Iran", "USA", "Wales", "INGLATERRA", "IRÃ", "ESTADOS UNIDOS", "PAÍS DE GALES")) +

    createGroup("GRUPO C", 
        createNames("ARGENTINA", "SAUDIARABIA", "MEXICO", "POLAND", "ARGENTINA", "ARÁBIA SAUDITA", "MÉXICO", "POLÔNIA")) +

    createGroup("GRUPO D", 
        createNames("FRANCE", "AUSTRALIA", "DENMARK", "TUNISIA", "FRANÇA", "AUSTRALIA", "DINAMARCA", "TUNISIA")) +

    createGroup("GRUPO E", 
        createNames("SPAIN", "COSTARICA", "GERMANY", "JAPAN", "ESPANHA", "COSTA RICA", "ALEMANHA", "JAPÃO")) +

    createGroup("GRUPO F", 
        createNames("BELGIUM", "CANADA", "MOROCCO", "CROATIA", "BÉLGICA", "CANADÁ", "MARROCOS", "CROÁCIA")) +

    createGroup("GRUPO G", 
        createNames("BRAZIL", "SERBIA", "SWITZERLAND", "CAMEROON", "BRASIL", "SÉRVIA", "SUÍÇA", "CAMARÕES")) +

    createGroup("GRUPO H",
        createNames("PORTUGAL", "GHANA", "URUGUAY", "SOUTHKOREA", "PORTUGAL", "GANA", "URUGUAI", "CORÉIA DO SUL"))

function createGame(country1, hour, country2) {
    return `
        <li>
            <img src="./assets/icon-${country1}.svg" alt="${country1}" />
            <strong> ${hour}</strong>
            <img src="./assets/icon-${country2}.svg" alt="${country2}" />
        </li>
    `
}

function createCard(stage, date, day, games) {
    return `
    <div class="card"> 
        <h1><span>${stage}</span></h1>
            <h2>${date} <span>${day}</span></h2>
                <ul>
                ${games}
                </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML = 

    createCard("FASE DE GRUPOS", "20/11", "domingo", 
        createGame("Qatar", "13:00", "Ecuador")) +

    createCard("FASE DE GRUPOS", "21/11", "Segunda", 
        createGame("England", "10:00", "Iran") + 
        createGame("Senegal", "13:00", "netherlands") + 
        createGame("usa", "16:00", "wales")) +

    createCard("FASE DE GRUPOS", "22/11", "Terça", 
        createGame("argentina", "07:00", "saudiarabia") +
        createGame("denmark", "10:00", "tunisia") +
        createGame("mexico", "13:00", "poland") +
        createGame("france", "16:00", "australia")) +

    createCard("FASE DE GRUPOS", "23/11", "Quarta", 
        createGame("morocco", "07:00", "croatia") +
        createGame("germany", "10:00", "japan") +
        createGame("spain", "13:00", "costarica") +
        createGame("belgium", "16:00", "canada")) +

    createCard("FASE DE GRUPOS", "24/11", "Quinta", 
        createGame("switzerland", "07:00", "cameroon") +
        createGame("uruguay", "10:00", "southkorea") +
        createGame("portugal", "13:00", "ghana") +
        createGame("brazil", "16:00", "serbia")) +

    createCard("FASE DE GRUPOS", "25/11", "Sexta", 
        createGame("wales", "07:00", "iran") +
        createGame("qatar", "10:00", "senegal") +
        createGame("netherlands", "13:00", "ecuador") +
        createGame("england", "16:00", "usa")) +

    createCard("FASE DE GRUPOS", "26/11", "Sábado", 
        createGame("tunisia", "07:00", "australia") +
        createGame("poland", "10:00", "saudiarabia") +
        createGame("france", "13:00", "denmark") +
        createGame("argentina", "16:00", "mexico")) +

    createCard("FASE DE GRUPOS", "27/11", "Domingo", 
        createGame("japan", "07:00", "costarica") +
        createGame("belgium", "10:00", "morocco") +
        createGame("croatia", "13:00", "canada") +
        createGame("spain", "16:00", "germany")) +

    createCard("FASE DE GRUPOS", "28/11", "Segunda", 
        createGame("cameroon", "07:00", "serbia") +
        createGame("southkorea", "10:00", "ghana") +
        createGame("brazil", "13:00", "switzerland") +
        createGame("portugal", "16:00", "uruguay")) +

    createCard("FASE DE GRUPOS", "29/11", "Terça", 
        createGame("ecuador", "12:00", "senegal") +
        createGame("netherlands", "12:00", "qatar") +
        createGame("iran", "16:00", "usa") + 
        createGame("wales", "16:00", "england")) +

    createCard("FASE DE GRUPOS", "30/11", "Quarta", 
        createGame("tunisia", "12:00", "france") +
        createGame("australia", "12:00", "denmark") +
        createGame("poland", "16:00", "argentina") +
        createGame("saudiarabia", "16:00", "mexico")) +

    createCard("FASE DE GRUPOS", "01/12", "Quinta", 
        createGame("croatia", "12:00", "belgium") +
        createGame("canada", "12:00", "morocco") +
        createGame("japan", "16:00", "spain") +
        createGame("costarica", "16:00", "germany")) +

    createCard("FASE DE GRUPOS", "02/12", "Sexta", 
        createGame("southkorea", "12:00", "portugal") +
        createGame("ghana", "12:00", "uruguay") +
        createGame("serbia", "16:00", "switzerland") +
        createGame("cameroon", "16:00", "brazil")) +

    createCard("OITAVAS DE FINAL", "03/12", "Sábado", 
            createGame("", "12:00", "") +
            createGame("", "16:00", "")) +

    createCard("OITAVAS DE FINAL", "04/12", "Domingo", 
        createGame("", "12:00", "") +
        createGame("", "16:00", "")) +    

    createCard("OITAVAS DE FINAL", "05/12", "Segunda", 
        createGame("", "12:00", "") +
        createGame("", "16:00", "")) +
        
    createCard("OITAVAS DE FINAL", "06/12", "Terça", 
        createGame("", "12:00", "") +
        createGame("", "16:00", "")) +  

    createCard("QUARTAS DE FINAL", "09/12", "Sexta", 
        createGame("", "12:00", "") +
        createGame("", "16:00", "")) +

    createCard("QUARTAS DE FINAL", "10/12", "Sábado", 
        createGame("", "12:00", "") +
        createGame("", "16:00", "")) +

    createCard("SEMI FINAL", "13/12", "Terça", 
        createGame("", "16:00", "")) +

    createCard("SEMI FINAL", "14/12", "Quarta", 
        createGame("", "16:00", "")) +

    createCard("DISPUTA 3 LUGAR", "17/12", "Sábado", 
        createGame("", "12:00", "")) +

    createCard("FINAL", "18/12", "Domingo", 
        createGame("", "12:00", "")) 
    