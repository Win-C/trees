/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(current = this.root) {
    // Solved with recursion
    if (!current) return 0;

    return Math.min(
      this.minDepth(current.left),
      this.minDepth(current.right)
    ) + 1;
    
    // TODO: Solved with stack iteration
    if (!this.root) return 0;

    let stack = [this.root];
    let minDepth = 1;
    let leftDepth = 0;
    let rightDepth = 0;
    
    while (stack.length){
      minDepth += Math.min(leftDepth, rightDepth);
      let node = stack.pop();

      if (current.left) {
        stack.push(current.left);
        leftDepth++;
      }
      if (current.right) {
        stack.push(current.right);
        rightDepth++;
      }
    }

    return minDepth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(current = this.root) {
    // Solved with recursion
    if (!current) return 0;

    return Math.max(
      this.maxDepth(current.left),
      this.maxDepth(current.right)
    ) + 1;

    // TODO: Solved with stack and iteration
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(current = this.root, sum = 0) {
    // if(!current) return 0;

    // sum += current.val;

    // return sum += Math.max(
    //   this.maxSum(current.left),
    //   this.maxDepth(current.right)
    // );
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, current = this.root, closest = Infinity) {
    if(!current) return closest === Infinity ? null : closest;

    if (current.val > lowerBound && current.val < closest) closest = current.val;

    let minVal = Math.min(
      this.nextLarger(lowerBound, current.left, closest),
      this.nextLarger(lowerBound, current.right, closest)
    );

    return minVal === 0? null : minVal;

    // TODO: Solve with stack and with queue class
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
