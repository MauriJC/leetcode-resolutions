"use strict";
console.log("merge sorted arrays loaded");
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    // Definir punteros para el final de nums1, nums2 y el espacio total de nums1
    let p1 = m - 1; //Puntero al final de nums1 (en los digitos que no son 0)
    let p2 = n - 1; //Puntero al final de nums2
    let p = m + n - 1; //Puntero al final de nums1
    // Recorre ambos arrays desde el final
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        }
        else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    // Si quedan elementos en nums2, cópialos
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}
;
const nums3 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
merge(nums3, m, nums2, n);
/**
 Explicacion de la solucion
    Usa tres punteros:
        p1 apunta al último elemento de la parte relevante de nums1 (es decir, al índice m - 1).
        p2 apunta al último elemento de nums2 (es decir, al índice n - 1).
        p apunta al último índice total de nums1 (es decir, al índice m + n - 1).

    Compara los elementos apuntados por p1 y p2. Inserta el elemento mayor en la posición p en nums1, y mueve el puntero correspondiente (p1 o p2) hacia la izquierda (es decir, hacia el próximo elemento).

    Si un array se agota (por ejemplo, todos los elementos de nums1 ya se han colocado en su lugar), copia los elementos restantes de nums2 directamente al principio de nums1.

    No es necesario mover los elementos de nums1 si nums2 se agota primero, ya que nums1 ya está en su lugar.
 */
