/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(current = this.root, sum = this.root ? this.root.val : 0) {
    // Solve with recursion:
    if (!current) return 0;

    // hidden base case: go through all the children
    for (let child of current.children) {
      // for this child, add node value to the sum
      sum += child.val;
      // if there are children, recurse with child as the root
      if (child.children.length > 0) {
        return this.sumValues(child, sum);
      }
    }

    return sum;

    // Solved with iteration:
    // let sum = 0;
    // let toVisitStack = [this.root];

    // while(toVisitStack.length){
    //   let current = toVisitStack.pop();

    //   if (!current) break;

    //   sum += current.val;
    //   for (let child of current.children){
    //     toVisitStack.push(child);
    //   }
    // }

    // return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // Solved with recursion:
    let count = 0;

    if (!this.root) return 0;

    if (this.root.val % 2 === 0) count++;

    function _countEvens(current) {
      for (let child of current.children) {
        if (child.val % 2 === 0) count++;
        if (child.children.length > 0) {
          _countEvens(child)
        }
      }
    }

    _countEvens(this.root);
    return count;

    // Solved with iteration:
    // let count = 0;
    // let toVisitStack = [this.root];

    // while (toVisitStack.length) {
    //   let current = toVisitStack.pop();

    //   if (!current) break;

    //   if (current.val % 2 === 0) count++;
    //   for (let child of current.children) {
    //     toVisitStack.push(child);
    //   }
    // }

    // return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // Solved with recursion:
    let count = 0;

    if (!this.root) return 0;

    if (this.root.val > lowerBound) count++;

    function _numGreater(current) {
      for (let child of current.children) {
        if (child.val > lowerBound) count++;
        if (child.children.length > 0) {
          _numGreater(child);
        }
      }
    }

    _numGreater(this.root);
    return count;

    // Solved with iteration:
    // let count = 0;
    // let toVisitStack = [this.root];

    // while (toVisitStack.length) {
    //   let current = toVisitStack.pop();

    //   if (!current) break;

    //   if (current.val > lowerBound) count++;
    //   for (let child of current.children) {
    //     toVisitStack.push(child);
    //   }
    // }

    // return count;
  }
}

module.exports = { Tree, TreeNode };
