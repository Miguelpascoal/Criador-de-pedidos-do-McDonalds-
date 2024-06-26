var Pedido = {
    quantidade:0,
    hamburguer:"",
    bebida:""
}

var pedidoArr = [];

function criardemanda(){
    event.preventDefault();
    var hamburguer = document.getElementById("Hamburgues")
    var bebida = document.getElementById("Bebidas")

    var novopedido = novademanda(hamburguer.value,bebida.value)
    if(pedidoArr.length !== 0){
        let encontrou = false
        pedidoArr.forEach(pedido =>{
            if(pedido.hamburguer === novopedido.hamburguer && pedido.bebida === novopedido.bebida){
                pedido.quantidade++
                encontrou = true
            }
        })
        if(!encontrou){
            pedidoArr.push(novopedido)
        }
    }else{
        pedidoArr.push(novopedido)
    }
    atualizar()
}

function novademanda(hamburguer, bebida){
    var NovaDemanda = Object.create(Pedido)
    NovaDemanda.quantidade = 1
    NovaDemanda.hamburguer = hamburguer
    NovaDemanda.bebida = bebida
    return NovaDemanda
}

function atualizar(){
    var lista = document.getElementById("lista")
    lista.innerHTML = ""
    pedidoArr.forEach(pedido =>{
        var elementolista = document.createElement("li")
        var span = document.createElement("span")
        var texto = "Hamburguer: "+pedido.hamburguer+"<br> Bebida: "+ pedido.bebida+"<br> Quantidade: "+pedido.quantidade
        span.innerHTML = texto
        elementolista.appendChild(span)
        lista.appendChild(elementolista)
    })
}