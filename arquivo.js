function onSubmit() {
    var numero = document.getElementById("numero").value
    var frase = document.getElementById("frase").value 

    if(frase.length === 0 ) {
      return alert("Digite sua mensagem :3")  
    }
    if(numero.length === 0 ) {
        return alert("Digite o número")
    }

    window.open(`https://api.whatsapp.com/send?phone=+55${numero}&text=${frase}`)
    console.log(frase, numero)
}
