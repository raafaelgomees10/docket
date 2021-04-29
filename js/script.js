// Função responsavel por pegar os valores do input no card 1 e escrever no card 2
function getData() {
    var inputName = document.getElementById("input-name").value;
    var inputEmail = document.getElementById("input-email").value;
    var inputTel1 = document.getElementById("input-tel1").value;
    var inputTel2 = document.getElementById("input-tel2").value;

    if (inputName != '' || inputEmail != '' || inputTel1 != '') {
        const writeName = document.querySelector("#nameResult")
        const writeEmail = document.querySelector("#emailResult")
        const writeTel1 = document.querySelector("#tel1Result")
        const writeTel2 = document.querySelector("#tel2Result")

        writeName.innerHTML = inputName;
        writeEmail.innerHTML = inputEmail;
        writeTel1.innerHTML = inputTel1;

        if (inputTel2 == '') {
            document.getElementById('tel2Result').style.color = '#ababab';
            writeTel2.innerHTML = 'Não Informado';
        } else {
            document.getElementById('tel2Result').style.color = '#000';
            writeTel2.innerHTML = inputTel2;
        }
    }
    validateName();
    return false; //retorno falso para nao atualizar a pagina
}

//criando regex name em seguida função para validar nome
const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexName = /^[a-zA-Z ]{2,30}$/;

//função responsavel pela validação dos campos input e exibição de mensagem de erro
function validateName() {
    var helperName = $("#helper-name");
    var valueName = document.getElementById("input-name").value;
    const styleName = document.getElementById("input-name").style;

    var helperEmail = $("#helper-email");
    var valueEmail = document.getElementById("input-email").value;
    const styleEmail = document.getElementById("input-email").style;

    //tenho que retornar falso as condições para meu formulario nao seguir com o submit
    if (!regexEmail.test(valueEmail) && !regexName.test(valueName)) {
        styleEmail.border = "1px solid red";
        helperEmail.text(valueEmail + " não é um e-mail válido. Por favor digite novamente");
        styleName.border = "1px solid red";
        helperName.text(valueName + " não é um nome válido. Por favor digite novamente");
        return false;
    } else if (!regexEmail.test(valueEmail)) {
        styleEmail.border = "1px solid red";
        helperEmail.text(valueEmail + " não é um e-mail válido. Por favor digite novamente");
        return false;
    } else if (!regexName.test(valueName)) {
        styleName.border = "1px solid red";
        helperName.text(valueName + " não é um nome válido. Por favor digite novamente");
        return false;
    } else {
        changeDiv();
    }
    return true;
}
//função responsavel por exibir os resultados do input na tela 
function changeDiv() {
    var display = document.getElementById('subtitle').style.display;
    document.getElementById('results').style.display = 'block';
    document.getElementById('subtitle').style.display = 'none';

    var myVar = setTimeout(myTimer, 100);
    var myVar2 = setTimeout(myTimer2, 3000);
}
//função responsavel por exibir a mensagem de sucesso
function myTimer() {
    document.getElementById("success").style.opacity = '0.9';
}
//função responsavel por retirar a mensagem de sucesso
function myTimer2() {
    document.getElementById("success").style.opacity = '0';
}
//função responsavel por dar submit no formulario recebendo os paramentros da getData
$(document).ready(function () {
    $("#myForm").bind("submit", getData);
});

//mascara para os campos de telefone
$(document).ready(function () {
    $('#input-tel1').mask("(99) 99999-9999");
    $('#input-tel2').mask("(99) 99999-9999");
});

//pegando data atual para colocar no footer
const getYear = document.querySelector("#footer");
let d = new Date();
getYear.innerHTML = `Docket © ` + d.getFullYear();


