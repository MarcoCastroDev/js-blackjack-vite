/**
 * 
 * @param {String} carta 
 * @returns {HTMLElement} Imagen de retorno
 */

export const crearCartaHTML = (carta) => {

    if (!carta ) throw new Error ('carta es un argumento obligatorio')

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    return imgCarta
}