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
    if (!current) return sum;

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

  countEvens(current = this.root, count = 0) {
    // Solved with recursion:
    if (!current) return count;

    if (current.val % 2 === 0) count++;

    for (let child of current.children) {
      if (child.children.length > 0) {
        return this.countEvens(child, count);
      }
      if (child.val % 2 === 0) count++;
    }

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

  numGreater(lowerBound, current = this.root, count = 0) {
    // Solved with recursion:
    if (!current) return 0;

    if (current.val > lowerBound) count++;

    for (let child of current.children) {
      if (child.children.length > 0) {
        return this.numGreater(lowerBound, child, count);
      }
      if (child.val > lowerBound) count++;
    }

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
