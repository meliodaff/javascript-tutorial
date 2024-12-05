package week17;

class Node{
    int data;
    Node left, right;

    Node(int v) {
        data = v;
        left = right = null;
    }
}

class BinaryTree {
    Node root;

    int findMax(Node node){
        if (node == null){
            return Integer.MIN_VALUE;
        }

        int result = node.data;
        int lres = findMax(node.left);
        int rres = findMax(node.right);

        
        if(lres > result){
            result = lres;
        }
        if(rres > result){
            result = rres;
        }
        return result;
    }

    int findMin(Node node){
        if (node == null){
            return Integer.MAX_VALUE;
        }

        int result = node.data;
        int lres = findMin(node.left);
        int rres = findMin(node.right);

        if(lres < result){
            result = lres;
        }
        if(rres < result){
            result = rres;
        }
        return result;
    }

    int sumOfNodes (Node node) {
        if(node == null){
            return 0;
        }
        return node.data + sumOfNodes(node.left) + sumOfNodes(node.right);
    }

    public static void printPreorder(Node node) {
        if (node == null)
            return;

        System.out.print(node.data + " ");

        printPreorder(node.left);

        printPreorder(node.right);
    }

    public static void printPostorder(Node node) {
        if (node == null)
            return;

        printPostorder(node.left);

        printPostorder(node.right);

        System.out.print(node.data + " ");
    }


    boolean isLeaf(Node node){
        return node.left == null && node.right == null;
    }


    int countAndPrintLeafNodes(Node node){
        if (node == null) {
            return 0;
        }
        if(isLeaf(node)){
            return 1;
        }
        return countAndPrintLeafNodes(node.left) + countAndPrintLeafNodes(node.right);
    }

}

public class One{
    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();

        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.left.left = new Node(4);
        tree.root.left.left.right = new Node(7);
        tree.root.right = new Node(3);
        tree.root.right.left = new Node(5);
        tree.root.right.left.left = new Node(8);
        tree.root.right.left.right = new Node(9);
        tree.root.right.right = new Node(6);

        System.out.println("Maximum value of root left: " +  tree.findMax(tree.root.left));
        System.out.println("Minimum value of root left: " +  tree.findMin(tree.root.left));

        System.out.println("Maximum value of root right: " + tree.findMax(tree.root.right));
        System.out.println("Minimum value of root right: " + tree.findMin(tree.root.right));
        

        System.out.println("The sum of all nodes");
        System.out.println(tree.sumOfNodes(tree.root));


        System.out.println("Preorder traversal of binary tree is: ");
        BinaryTree.printPreorder(tree.root);
        System.out.println();

        System.out.println("Postorder traversal of binary tree is: ");
        BinaryTree.printPostorder(tree.root);
        System.out.println();

        System.out.println("The count of leaf nodes: " + tree.countAndPrintLeafNodes(tree.root));



    }
}