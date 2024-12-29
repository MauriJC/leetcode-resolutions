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

function minDepth(root: TreeNode | null): number {

    function dive(root: TreeNode | null): number {
        // Consideramos el caso borde
        if (!root) return 0;

        let rightDepth: number = dive(root.right);
        let leftDepth: number = dive(root.left);

        // Consideramos el caso de los subarboles nulos
        if (!root.left) return rightDepth + 1;
        if (!root.right) return leftDepth + 1;

        return (Math.min(rightDepth, leftDepth)) + 1;
    }

    return dive(root);
};