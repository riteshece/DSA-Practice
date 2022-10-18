//     insertInMiddleOfList(value, k) {
//         let count = 1;
//         let current = this.firstNode;
//         while(current && count !==k ){
//             current= current.next
//             count++;
//         }
//         if(!current && count !== k){
//             console.log("Invalid Position")
//             throw Error("Invalid Position")
//         }else if(!current && count == k){
//             this.insertInEndOfList(value)
//         }else{
//             const node = new Node (value);
//             node.next = current.next;
//             current.next = node;
//         }
//     }

// list.insertInMiddleOfList(100, 3)
// list.printList()


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    unshift(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            let data = this.head;
            this.head = node;
            node.next = data;
        }
    }


    shift() {
        if (!this.head) {
            throw Error("undefined")
        }

        let remove = this.head;
        this.head = this.head.next;
        remove.next = null;

        if (!this.head) {
            this.head === null;
        }
    }



    push(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }



    pop() {
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value)
            current = current.next
        }
    }
}


const list = new linkedList();


let arr = [5, 10, 15]
for (let val of arr)
    list.unshift(val)
list.printList()

console.log("**")

list.shift();

list.pop()

list.printList()