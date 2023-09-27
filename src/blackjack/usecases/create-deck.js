import _ from 'underscore';
// Esta función crea un nuevo deck
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposCarta ejm: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales ejm: ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo deck
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {

    if (!tiposCarta || tiposCarta.length === 0) throw new Error('Tipos de carta es obligatorio');

    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('Tipos especiales es obligatorio');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}

// export default crearDeck;