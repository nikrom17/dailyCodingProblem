class Node {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    insert(val) {
        let stack = [];
        if (this.val) {
            if (this.left == null) {
                this.left = new Node(val);
            } else if (this.right == null) {
                this.right = new Node(val);
            } else {
                stack.push(this.left);
                stack.push(this.right);
                let next = stack.shift();
                next.insert(val);
            }
        }
    }
    printLevelOrder(root) {
        let stack = [];
        let string = '';
        stack.push(root)
        while (stack.length) {
            root = stack.shift();
            string = string + root.val.toString() + ' ';
            if (root.left != null) {
                stack.push(root.left);
            }
            if (root.right != null) {
                stack.push(root.right);
            }
        }
        console.log(string);
    }


    printInorder(root) {
        if (root) {
            this.printInorder(root.left);
            console.log(root.val);
            this.printInorder(root.right);
        }
        return
    }
    printPreorder(root) {
        if (root) {
            console.log(root.val);
            this.printInorder(root.left);
            this.printInorder(root.right);
        }
        return
    }
    printPostorder(root) {
        if (root) {
            this.printInorder(root.left);
            this.printInorder(root.right);
            console.log(root.val);
        }
        return
    }
}

let root = new Node(1);
root.insert(2);
root.insert(3);
root.insert(4);
root.insert(5);
//console.log(root);
root.printLevelOrder(root)

