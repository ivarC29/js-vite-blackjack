// Esta función me permite tomar una carta

/**
 * Esta funcion toma la ultima carta del deck 
 * @param {Array<String>} deck -recibe deck del juego en curso 
 * @returns {String} retorna carta como string
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}