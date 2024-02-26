/**
 * Esta función permite tomar una carta
 * @param {Array<String>} deck Deck de cartas
 * @returns {String} Retorna la última carta del deck
 */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}