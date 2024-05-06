function f(root) {
    if(root == null) return;

    return 1 + Math.max(f(root.left), f(root.right));

}

var maxDepth = function(root) {
    return f(root);
}