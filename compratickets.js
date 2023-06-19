let botonBorrar = document.getElementById("button--borrar");
let inputs = document.querySelectorAll("input");
let categorias = document.getElementById("Categoria");
let botonResumen = document.getElementById("button--resumen");
let estudiante = document.getElementById("descuento1");
let trainee = document.getElementById("descuento2");
let junior = document.getElementById("descuento3");


estudiante.addEventListener('click', ()=>{
    document.getElementById("Categoria").selectedIndex="1";
    estudiante.style.backgroundColor = 'rgb(13, 111, 255)';
    estudiante.style.color = 'whitesmoke';
    trainee.style.backgroundColor = 'transparent';
    trainee.style.color = 'black';
    junior.style.backgroundColor = 'transparent';
    junior.style.color = 'black';
    promocion = 0.2;
})



trainee.addEventListener('click', ()=>{
    document.getElementById("Categoria").selectedIndex="2";
    trainee.style.backgroundColor = 'rgb(151, 240, 235)';
    trainee.style.color = 'whitesmoke';
    estudiante.style.backgroundColor = 'transparent';
    estudiante.style.color = 'black';
    junior.style.backgroundColor = 'transparent';
    junior.style.color = 'black';
    promocion = 0.5;
})

junior.addEventListener('click', ()=>{
    document.getElementById("Categoria").selectedIndex="3";
    junior.style.backgroundColor = 'rgb(243, 241, 109)';
    junior.style.color = 'whitesmoke';
    estudiante.style.backgroundColor = 'transparent';
    estudiante.style.color = 'black';
    trainee.style.backgroundColor = 'transparent';
    trainee.style.color = 'black';
    promocion = 0.85;
})

categorias.addEventListener('click', ()=>{
    valorCategorias = categorias.value;
    if(valorCategorias == 1){
        cartaA.style.backgroundColor = 'rgb(41, 41, 190)';
        cartaA.style.color = 'whitesmoke';
        cartaB.style.backgroundColor = 'transparent';
        cartaB.style.color = 'black';
        cartaC.style.backgroundColor = 'transparent';
        cartaC.style.color = 'black';
        promocion = 0.2;
    }
    if(valorCategorias == 0){
        promocion = 1;
    }
    if(valorCategorias == 2){
        cartaB.style.backgroundColor = 'green';
        cartaB.style.color = 'whitesmoke';
        cartaA.style.backgroundColor = 'transparent';
        cartaA.style.color = 'black';
        cartaC.style.backgroundColor = 'transparent';
        cartaC.style.color = 'black';
        promocion = 0.5;
    }
    if(valorCategorias == 3){
        cartaC.style.backgroundColor = 'goldenrod';
        cartaC.style.color = 'whitesmoke';
        cartaA.style.backgroundColor = 'transparent';
        cartaA.style.color = 'black';
        cartaB.style.backgroundColor = 'transparent';
        cartaB.style.color = 'black';
        promocion = 0.85;
    }
})


botonBorrar.addEventListener('click', ()=>{
    inputs.forEach(input => input.value = '');
    document.getElementById('total').innerHTML = 'Total a Pagar: $ ';
});

function nombreComprador(nombre){
    compradorNombre = nombre;    
}

function apellidoComprador(apellido){
    compradorApellido = apellido;    
}

function correoComprador(correo){
    compradorCorreo = correo;    
}

function cantidadBoletos(valor){
    if(valor < 0){
        alert("La cantidad de boletos no puede ser nulo o menor a 0");
    }
    valor = parseInt(Math.round(valor));
    cantidad = valor;
}


botonResumen.addEventListener('click', ()=>{
    let vacio = 0;
    inputs.forEach( input =>{ if(input.value == ''){
        vacio++;
    }});
    if(vacio > 0){
        alert("Completa los campos vacios");
        document.getElementById('totales').innerHTML = 'Datos insuficientes para realizar la compra';
    }else{
        document.getElementById('total').innerHTML = 'Total a Pagar: $ ' + 200 * promocion * cantidad; 
        document.getElementById('totales').innerHTML = `Nombre: ${compradorNombre} </br>
                                                        Apellido: ${compradorApellido} </br>
                                                        Correo: ${compradorCorreo} </br>
                                                        Tickets: ${cantidad} </br>Total a Pagar: $ ` + 200 * promocion * cantidad;
    }
});

function refrescarPagina(){
    location.reload();
}