
/**
 * Esta funcion devuelve el valor de la carta actual
 * @param {String} carta Numero carta ejm: 4H
 * @returns {int} retorna el valor de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}