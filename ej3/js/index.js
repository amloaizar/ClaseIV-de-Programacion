//creacion de objetos anidados en JavaScript///

var miReceta = {
    "descripcion":"postre favorito",
    "costo": 15.6,
    "ingredientes":{
        "masa":{
          "harina":"100 gramos",
          "sal":"1/2 cucharada",
          "agua":"1 taza"  
        },
        "glaseado":{
            "azúcar":"120 gramos",
            "chocolate":"5 cucharadas",
            "mantequilla":"200 gramos"
        }    
    }
};

console.log(miReceta.descripcion);