let juegoUno = 500
let juegoDos = 250
let juegoTres = 250
let juegoCuatro = 1100
let juegoCinco = 700
let carritoValor = 0
let saldo = 1000

let userName = prompt("Ingrese su nombre")
alert("Bienvenido a Indie Games " + (userName) + " Somos la mejor plataforma de juegos indie");
let opcion = prompt("Elegí una opción \n1 -Catálogo de Compra\n2 -Carrito \n3-Mi saldo \n4- Depositar saldo \n5- Efectuar pago \ningrese X para salir")



while (opcion != "x" && opcion != "X") {
    switch (opcion) {
        case "1":
            let carrito = prompt("Elegí el juego que querees comprar \n1 -Neon White $500 \n2 -Metal Hellsinger $250 \n3- Infernax $250 \n4- Trek to Yomi 1100$ \n5 -Signalis 700$ \n6 -Ingresá X para salir")
            while (carrito != "x" && opcion != "X") {
                switch (carrito) {
                    case "1":
                        carritoValor = carritoValor + juegoUno
                        break
                    case "2":
                        carritoValor = carritoValor + juegoDos
                        break
                    case "3":
                        carritoValor = carritoValor + juegoTres
                        break
                    case "4":
                        carritoValor = carritoValor + juegoCuatro
                        break
                    case "5":
                        carritoValor = carritoValor + juegoCinco
                        break
                }
                carrito = prompt("Elegí el juego que querees comprar \n1 -Neon White $500 \n2 -Metal Hellsinger $250 \n3- Infernax $250 \n4- Trek to Yomi 1100$ \n5 -Signalis 700$ \n6 -Ingresá X para salir")
            }
            break
        case "2":
            alert("su carrito lleva $" + carritoValor)
            break
        case "3":
            alert("su saldo es de$" + saldo)
            break
        case "4":
            let deposito = parseInt(prompt("Ingrese monto a depositar en su cuenta"))
            if (Number.isNaN(deposito)) {
                alert("El valor ingresado no es un número")
            } else {
                saldo = saldo + deposito
            }
            break
        case "5":
            if (saldo >= carritoValor && carritoValor > 0) {
                saldo = saldo - carritoValor
                alert("Se efectuó el pago exitosamente")
            } else {
                alert("su saldo es insuficiente o no seleccionó un producto, ingrese un juego o mas dinero")
            }
            break
        default:
            alert("opción invalida")
            break
    }
    opcion = prompt("Elegí una opción \n1 -Catálogo de Compra\n2 -Carrito \n3-Mi saldo \n4- Sumar saldo \n5- Efectuar pago \ningrese X para salir")

}
