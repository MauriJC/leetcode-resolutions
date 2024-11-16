"use strict";
console.log("Same tree loaded");
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function isSameTree(p, q) {
    // Si ambos nodos son nulos, son iguales
    if (p === null && q === null)
        return true;
    // Si uno de ellos es nulo y el otro no, no son iguales
    if (p === null || q === null)
        return false;
    // Si los valores de los nodos no son iguales, no son iguales
    if (p.val !== q.val)
        return false;
    // Comparar recursivamente los subárboles izquierdo y derecho
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
;
/**
 * Mi solucion fallida
 *   let inorderArray1: number[] = [];
    let inorderArray2: number[] = [];

    function printInorder(node: TreeNode | null, inorderArray: number[]): void {
        if (node === null) return;

        // Primero recorrer el subárbol izquierdo
        printInorder(node.left, inorderArray);

        // Luego procesar el nodo actual
        inorderArray.push(node.val);

        // Finalmente, recorrer el subárbol derecho
        printInorder(node.right, inorderArray);
    }

    printInorder(p, inorderArray1);
    printInorder(q, inorderArray2);

    console.log(JSON.stringify(inorderArray1) === JSON.stringify(inorderArray2));

    if (JSON.stringify(inorderArray1) === JSON.stringify(inorderArray2)) {
        return true
    };
    return false;
 */ 
