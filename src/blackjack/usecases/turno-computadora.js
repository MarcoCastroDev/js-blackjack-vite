import { pedirCarta, valorCarta } from "./";
import { crearCartaHTML } from "./crear-carta-html";

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML
 * @param {HTMLElement} divCartasComputadora
 * @param {Array<String>} deck Deck de cartas
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error('puntosMinimos son necesarios');
    if (!puntosHTML) throw new Error('Argumento puntosHTML son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}
