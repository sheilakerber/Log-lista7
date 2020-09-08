/*1) Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. Caso exista, o programa deve mostrar todos os índices que ele se encontra.*/
function verificarNumeroVetor() {
    //cria o vetor
    let vetor = [2, 15, 19, 25, 29, 36, 37, 44, 46, 49]

    //pega o num inserido pelo usuario
    let inputUsuario = Number(document.getElementById("numInputUsuario").value)

    //loop para comparar o input com os valores salvos no vetor
    for (i = 0; i < 10; i++) {
        if (inputUsuario === vetor[i]) {
            document.getElementById("resEx1").innerHTML = `O número ${inputUsuario} existe no vetor, e está na posição ${i}.`
            return //se encontrar um valor igual, parar o programa
        }
    }

    //se nao encontrar valor igual, printar que o num nao existe
    console.log("NAO OK")
    document.getElementById("resEx1").innerHTML = `O número ${inputUsuario} NÃO existe no vetor.`
    return
}

//limpar campos, caso o usuario queira tentar novamente
function limparDadosVetor() {
    document.getElementById("numInputUsuario").value = ""
    document.getElementById("resEx1").innerHTML = ""
}

/*2) Desenvolver um programa que peça ao usuário o número de doenças a cadastrar, no qual ele deve cadastrar o nome da doença e se ela é transmitida por vírus, bactéria
ou por ambos. Ao final, mostrar quatro listas: doenças transmitidas por vírus, doenças transmitidas por bactérias, doenças transmitidas por ambos, lista com todas doenças.*/

function cadastrarDoencas() {

    //variaveis globais
    let numDoencas = Number(prompt("Quantas doenças você deseja cadastrar?"))
    let nomeDoenca = []
    let agenteEtiologDoenca = []
    let doencasVirus = []
    let doencasBacterias = []
    let doencaVirusEbacteria = []

    //atualizacao dos arrays conforme o agente infeccioso
    for (i = 0; i < numDoencas; i++) {
        nomeDoenca.push(prompt("Nome da doença: "))
        agenteEtiologDoenca.push(prompt("Agente etiológico: \n(1 = vírus  2 = bactéria  3 = ambos)"))

        if (agenteEtiologDoenca[i] === "1") {
            doencasVirus.push(nomeDoenca[i])
        }

        if (agenteEtiologDoenca[i] === "2") {
            doencasBacterias.push(nomeDoenca[i])
        }

        if (agenteEtiologDoenca[i] === "3") {
            doencaVirusEbacteria.push(nomeDoenca[i])
        }
    }

    //resposta ao usuario
    document.getElementById("resEx2").innerHTML = `Relatório de doenças cadastradas:` + "<br/>" + `Total de doenças: ${doencaVirusEbacteria.length + doencasVirus.length + doencasBacterias.length} (${doencaVirusEbacteria + "," + doencasVirus + "," + doencasBacterias}). ` + "<br/>" + `-- Doenças causadas por vírus -- Total: ${doencasVirus.length}.  Doenças: ${doencasVirus}.` + "<br/>" + `-- Doenças causadas por bactérias --  Total: ${doencasBacterias.length}.  Doenças: ${doencasBacterias}.` + "<br/>" + `-- Doenças causadas por vírus ou bactérias -- Total: ${doencaVirusEbacteria.length}.  Doenças: ${doencaVirusEbacteria}.`
}

/*3) Numa floricultura são vendidos os seguintes tipos de flores: rosa (R$12,60), begônia (R$8,50), dália (R$15,45), orquídea (R$22,30), tulipa (R$6,25), bromélia (R$7,90), girassol (R$9,20). Um cliente entra para comprar algumas flores, porém, tem apenas R$50 em dinheiro. Peça ao cliente quantas flores ele quer comprar e em seguida ele deve digitar os nomes das flores a comprar. Caso o valor não ultrapasse R$50, mostrar o valor a pagar (o vendedor só tem moedas de 1 real no momento, o valor deve ser arredondado para cima ou pra baixo caso passe ou fique abaixo de 50 centavos os decimais. Caso o valor ultrapasse R$50, ao final, mostrar uma mensagem avisando que não é possível comprar todas as flores.*/

function encomendarFLores() {

    //variaveis globais
    let flores = ["rosa", "begonia", "dalia", "orquidea", "tulipa", "bromelia", "girassol"]
    let valorFlores = [12.60, 8.50, 15.45, 22.30, 6.25, 7.90, 9.20]

    let totalTiposFlores = Number(prompt("Quantos tipos de flores você deseja comprar?"))
    let valorDevido = 0

    //loop de acordo com o num de tipos de flores que o usuario quer comprar
    for (i = 0; i < totalTiposFlores; i++) {
        //tipo da flor
        let escolhida = prompt("Nome da flor: ")
            //quantidade do tipo escolhido
        let unidadesFlorEscolhida = Number(prompt("Unidades: "))

        //encontrando o index da flor
        let indiceEscolhida = flores.indexOf(escolhida)

        //atualizando o valor devido
        valorDevido += Math.round((valorFlores[indiceEscolhida] * unidadesFlorEscolhida))
    }

    //resposta ao usuario
    if (valorDevido > 50) {
        alert("Você não tem dinheiro suficiente. Tente refazer seu pedido.")
    } else {
        alert(`Encomenda efetuada com sucesso. Você receberá R$${50 - valorDevido}.00 de troco.`)
    }
}