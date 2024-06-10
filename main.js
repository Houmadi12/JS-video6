

// function helloword(){
//     document.write("hello ");
//     document.write("world !")
// }

function helloword(){
    document.write("hello every one");
 
}

helloword();
helloword();


// Structure d'une fonction

/**
 * function fonctionName(){
 *  instruction.........
 * }
 */

let data2 = "OK"

// attention dans ce cas le variable déclarer à l'interieur de la fonction in fectera cel de l'interieur
function helloword(){
    let data2 = 14;
    document.write(data2);
 
}

document.write(datat2);

// Fontction qui prend des parametre

function somme (nb1, nb2){
    // document.write(nb1+nb2)

    return nb1 + nb2;
}
// appel le fonction
// somme(4,5);

let reslt = somme(3,4);
console.log(reslt);

// Fonction qui contien de test
function strang_sum(nb1, nb2){
    if(nb1 > nb2)
        return nb1 + nb2;
    else
        return nb1;
}


// Pour passer plusier argument
// function strang_sum(...args){
//     if(nb1 > nb2)
//         return nb1 + nb2;
//     else
//         return nb1;
// }

// fonction à l-interieur de fonction
// function some_fonction(){
//     function some_fonction(){
//         document.write("hello");
//     }
// }

// initialisation de valeur de parametre par defaut
// function strang_sum(nb1, nb2 = 10){
//     if(nb1 > nb2)
//         return nb1 + nb2;
//     else
//         return nb1;
// }

document.write(strang_sum(4,3));