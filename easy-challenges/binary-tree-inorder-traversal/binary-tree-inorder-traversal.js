"use strict";
// Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function inorderTraversal(root) {
    const inorderArray = []; // Array para almacenar el recorrido
    function printInorder(node) {
        if (node === null)
            return;
        // Primero recorrer el subárbol izquierdo
        printInorder(node.left);
        // Luego procesar el nodo actual
        inorderArray.push(node.val);
        // Finalmente, recorrer el subárbol derecho
        printInorder(node.right);
    }
    // Iniciar el recorrido en inorden desde la raíz
    printInorder(root);
    return inorderArray; // Devolver el resultado
}
;
