
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}



function inorderTraversal(root: TreeNode | null): number[] {

    const inorderArray: number[] = []; // Array para almacenar el recorrido

    function printInorder(node: TreeNode | null): void {
        if (node === null) return;

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


};
