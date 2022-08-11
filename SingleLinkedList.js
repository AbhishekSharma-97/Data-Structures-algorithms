class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }
    pop(){
        if(!this.head) return undefined
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead 
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = val;
            this.tail = val;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;    
        }
        this.length++;
        return this;
    }
    get(index){
        if(index >= this.length || index < 0) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
       var foundNode = this.get(index);
        if(foundNode){
            foundNode.value = val;
            return true;
        }
        return false
    }
    insert(index, val){
        if( index < 0 || index > this.length ) return false;
        if( index === 0 ){
            this.push(val);
            return true;
        }    
        if( index === this.length ){
            this.unshift(val)
            return true;
        }
        var newNode = new Node(val);
        var prev = this.get(index-1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length) return this.pop();
        var prevNode = this.get(index-1);
        var removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
        //We are tracking three var Node, Next, prev
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }
}

var list = new SingleLinkedList()
list.push('Hi');
list.push('there');
list.push('heyy');
list.push(999);