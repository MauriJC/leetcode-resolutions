console.log("Merge two sorted lists");

/**Definition for singly-linked list.*/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// Convierte un array en una lista enlazada
function arrayToList(array: number[]): ListNode | null {
    if (array.length === 0) return null;

    let head = new ListNode(array[0]); // Nodo inicial
    let current = head;

    for (let i = 1; i < array.length; i++) {
        current.next = new ListNode(array[i]); // Añade un nodo nuevo al final de la lista
        current = current.next;
    }

    return head;
}


let list1 = arrayToList([1, 2, 4]);
let list2 = arrayToList([1, 3, 4]);



function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    const dummy = new ListNode(); // Nodo de inicio "falso"

    let current = dummy; // Referencia para construir la nueva lista

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next; // Avanza en list1
        } else {
            current.next = list2;
            list2 = list2.next; // Avanza en list2
        }
        current = current.next; // Avanza en la nueva lista combinada
    }

    // Añadir cualquier nodo restante
    current.next = list1 !== null ? list1 : list2;

    // Devuelve el inicio de la lista combinada
    console.log(dummy.next)
    return dummy.next;

};

mergeTwoLists(list1, list2);