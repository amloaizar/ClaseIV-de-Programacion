function Clasificador(valor)
{
    var respuesta;
    switch(valor)
    {
    case 1:
        respuesta="alpha"
        break;
    case 2:
        respuesta="beta"
        break;
    case 3:
        respuesta="gamma"
        break;
    case 4:
        respuesta="delta"
        break;
    }
    return respuesta;
}

Clasificador(1);
console.log(Clasificador(1));
Clasificador(2);
console.log(Clasificador(2));
Clasificador(3);
console.log(Clasificador(3));
Clasificador(4);
console.log(Clasificador(4));