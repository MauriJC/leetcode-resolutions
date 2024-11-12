console.log("Remove duplicates from sorted list loaded");

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

function deleteDuplicates(head: ListNode | null): ListNode | null {

    // console.log(head);

    // let dummy, aux: ListNode | null = new ListNode();

    // if (!head) { return null };

    // dummy = head;

    // while (dummy) {
    //     if (dummy) {
    //         console.log("el val de dummy es", dummy.val);

    //         aux = dummy.next;

    //         if (dummy.val == aux?.val) {
    //             dummy.next = aux?.next;
    //         }

    //         dummy = dummy.next;

    //     } else {
    //         break;
    //     }
    // }

    // return head;
    if (!head) return null;

    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            // Saltamos el nodo duplicado
            current.next = current.next.next;
        } else {
            // Avanzamos al siguiente nodo
            current = current.next;
        }
    }

    return head;

};