function laCajaDePandora(numero){
    if(numero%2 === 0){
      let resultado =  numero.toString(2)
      return resultado;
      } else {
        let resultado2 = numero.toString(16)
         return resultado2;

      }
    }