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

function maxDepth(root: TreeNode | null): number {
    // Caso base: si el nodo es null, la profundidad es 0.
    if (root === null) {
        return 0;
    }

    // Calcula la profundidad del subárbol izquierdo.
    let leftDepth = maxDepth(root.left);

    // Calcula la profundidad del subárbol derecho.
    let rightDepth = maxDepth(root.right);

    // La profundidad del árbol actual es 1 + el máximo de las profundidades de los subárboles.
    return 1 + Math.max(leftDepth, rightDepth);

};