// In this i wil try to create a tree by coding.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChildren(val) {
    this.children.push(val);
  }

  printTree(node, prefix = "", isLast = true) {
    // Print current node with tree connectors
    console.log(prefix + (isLast ? "└── " : "├── ") + node.value);

    // Update prefix for children
    const newPrefix = prefix + (isLast ? "    " : "│   ");

    // Recursively print all children
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      const last = i === node.children.length - 1;
      this.printTree(child, newPrefix, last);
    }
  }
}

const root = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);

root.addChildren(b);
root.addChildren(c);
root.printTree(root);
