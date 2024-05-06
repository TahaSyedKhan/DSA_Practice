function invertBT(root) {
    if(root == null) return;

    invertBT(root.left);
    invertBT(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
}

var invertTree = function(root) {
    invertBT(root);
    return root;
}