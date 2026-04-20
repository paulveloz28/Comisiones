const VENTAS_BASE = 5;


function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.1);
    }
    return comision;
}

function validarInput(input, idError) {
    let valor = input.value.trim();
    let error = document.getElementById(idError);

    // Vacío
    if (valor === "") {
        error.textContent = "Este campo es obligatorio";
        return false;
    }

    // Solo números
    if (!/^\d+$/.test(valor)) {
        error.textContent = "Solo se permiten números";
        return false;
    }

    // Máximo 5 dígitos
    if (valor.length > 5) {
        error.textContent = "Máximo 5 dígitos";
        return false;
    }

    // Si todo está bien
    error.textContent = "";
    return true;
}

function calcular() {

    //Recuperamos propiedades de las cajas de texto
    //let componenteSueldoBase=document.getElementById("txtSueldoBase");

    //let componenteVentas=document.getElementById("txtVentas");
    //let componentePrecio=document.getElementById("txtPrecio");

    //Recuperamos el valor de las cajas de texto

    //let sueldoBaseStr=componenteSueldoBase.value;

    //let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    //let numeroVentasStr = recuperarTexto("txtVentas");
    //let precioProductoStr = recuperarTexto("txtPrecio");


    //let numeroVentasStr=componenteVentas.value;
    //let precioProductoStr=componentePrecio.value;

    //convertimos el texto a numero
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;



}