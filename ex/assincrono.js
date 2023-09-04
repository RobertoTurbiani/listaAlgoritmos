    function vai() {
        
        
        var pedirPizza = new Promise(function(entregarResultado, informarErro){
        setTimeout(function () {
            entregarResultado("Sua pizza chegou ")    
        }, 5000);
    }).then(function (resultado) {
        console.log(resultado)
    })

    //     if (1 == 2) {
    //         entregarResultado("Sua pizza chegou !");
    //    } else {
    //         informarErro("Acabou a pizza de mussarela !");
    //    }
    // });

    

   pedirPizza.then(function (resultado) {
    console.log(resultado)
   }).catch(function (erro) {
    console.log(erro);
   })

}


async function chamarViaCEP() {
    
}