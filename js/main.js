// INICIO

alert ("Bienvenido a The Proyect Argento")

const contratarServicio = () => {
    let servicio = ""
    let cantidadDeMeses = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = false

    do {
        servicio = prompt("¿Que servicio queres contratar? foto y video, cm, página web o diseño")
        cantidadDeMeses = parseInt(prompt("¿Cuántos meses desea contratar el servicio?"))

        switch (servicio) {
            case 'foto y video':
                precio = 500
                break;
            case 'cm':
                precio = 700
                break;
            case 'página web':
                precio = 1200
                break;
            default:
                alert('Alguno de los datos ingresados no son correctos!')
                precio = 0
                cantidad = 0
        }

        subtotal += precio * cantidadDeMeses
        seguirComprando = confirm('¿Desea seguir comprando?')

    } while (seguirComprando);

    return subtotal
};


const aplicarDescuento = (subtotal) => {
    if (subtotal >= 8000){
        const totalConDescuento = subtotal * 0.70
        return totalConDescuento
    } else {
        return subtotal
    }
};

const calcularCantidadCuotas = () => {
    let cuotas = 1
    let elegirCuota = false

    const quiereCuotas = confirm('¿Querés pagar en cuotas?')

    if (quiereCuotas) {
        do {
            cuotas = parseInt(prompt('Ingrese 3, 6 o 12 cuotas:'))
            switch (cuotas) {
                case 3:
                case 6:
                case 12:
                    return cuotas
                default:
                    alert('El número de cuota no es válido!')
            }
            elegirCuota = true
        } while (elegirCuota);
    } else {
        return cuotas
    }
};

const mostrarDetalleCompra = (total, cuotas) => {
    let valorCuota = total / cuotas
    alert('El total a pagar es: $'+total+' en '+cuotas+' cuotas de: '+valorCuota.toFixed(2))
};

const subtotal = contratarServicio()

const subtotalConDescuento = aplicarDescuento(subtotal)

const cuotas = calcularCantidadCuotas()

mostrarDetalleCompra(subtotal, cuotas)


alert ("Muchas gracias por tu compra!!! ♥")

