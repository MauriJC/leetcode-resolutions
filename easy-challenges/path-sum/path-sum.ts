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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {


    function diveAndSum(root: TreeNode | null, partialSum: number): boolean {
        if (!root) return false;

        let sum: number = root.val + partialSum;

        if (root.left == null && root.right == null) return sum === targetSum;

        return diveAndSum(root.left, sum) || diveAndSum(root.right, sum);
    }

    return diveAndSum(root, 0);

};