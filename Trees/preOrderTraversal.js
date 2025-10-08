// In this we will try to do PreOrder Traversal for that first we need to create a Tree i think

class Tree {
  constructor(value) {
    this.value = value;
    // this.children = [];
    this.left = null;
    this.right = null;
  }

  //add left
  addLeftChild(val) {
    this.left = val;
  }
  // add right node
  addRightChild(val) {
    this.right = val;
  }

  //print method to visualise the tree
  printTreeLikeStructure(node = this, prefix = "", isLeft = true) {
    if (!node) return;

    console.log(prefix + (isLeft ? "└── " : "├── ") + node.value);

    const newPrefix = prefix + (isLeft ? "    " : "│   ");

    // Print left and right children (if they exist)
    if (node.left || node.right) {
      if (node.left) {
        this.printTreeLikeStructure(node.left, newPrefix, false);
      }
      if (node.right) {
        this.printTreeLikeStructure(node.right, newPrefix, true);
      }
    }
  }
}

//make the binary tree;
const root = new Tree(10);
const node2 = new Tree(2);
const node3 = new Tree(3);
const node4 = new Tree(4);
const node5 = new Tree(5);

root.addLeftChild(node2);
root.addRightChild(node3);
node3.addLeftChild(node4);
node4.addRightChild(node5);
root.printTreeLikeStructure(root);
