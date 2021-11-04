function sumar(){
    //tomo los id de operandoA y operandoB
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    //parseInt convierte los valores a un numero. Si no uso la funcion parseInt se me 
    //conctatenarian ambos numeros y me mostraria por pantalla ambos numeros pegados(juntos) 
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operacion no contiene numeros';
    }
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
    console.log('Resultado: ' + resultado);
}

function restar(){
    //tomo los id de operandoA y operandoB
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    //parseInt convierte los valores a un numero. Si no uso la funcion parseInt se me 
    //conctatenarian ambos numeros y me mostraria por pantalla ambos numeros pegados(juntos) 
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operacion no contiene numeros';
    }
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
    console.log('Resultado: ' + resultado);
}

function multiplicar(){
    //tomo los id de operandoA y operandoB
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    //parseInt convierte los valores a un numero. Si no uso la funcion parseInt se me 
    //conctatenarian ambos numeros y me mostraria por pantalla ambos numeros pegados(juntos) 
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operacion no contiene numeros';
    }
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
    console.log('Resultado: ' + resultado);
}

function dividir(){
    //tomo los id de operandoA y operandoB
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    //parseInt convierte los valores a un numero. Si no uso la funcion parseInt se me 
    //conctatenarian ambos numeros y me mostraria por pantalla ambos numeros pegados(juntos) 
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operacion no contiene numeros';
    }
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
    console.log('Resultado: ' + resultado);
}
