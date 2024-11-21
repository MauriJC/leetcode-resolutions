"use strict";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0); // Nodo ficticio para empezar
    let current = dummy; // Puntero para construir la lista
    let carry = 0; // Variable para el acarreo
    while (l1 !== null || l2 !== null || carry > 0) {
        // Obtén los valores de los nodos actuales, si existen
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;
        // Suma de los valores actuales y el acarreo
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); // Actualiza el acarreo
        // Crea un nuevo nodo con el dígito de las unidades
        current.next = new ListNode(sum % 10);
        current = current.next;
        // Avanza a los siguientes nodos
        if (l1 !== null)
            l1 = l1.next;
        if (l2 !== null)
            l2 = l2.next;
    }
    return dummy.next; // Retorna la lista construida
}
;
