//define a class for the linked list,

class Node {

  constructor(element){
    this.element = element;
    this.next = null;
  }

}

// create a linkedlist class, which consumes this node class for every new element creation.

class LinkedList{
  constructor(){
    this.head= null;
    this.size =0;
  }

  //functions to access the linked list.

  //adds element to the list
  add(element){
    debugger;
    //create a node for the element
    var node = new Node(element);

    //store curent position to current element
    var current;

    //if list is empty add the element and make it head
    if(this.head === null)
        this.head = node;
     else{
       current = this.head;

       //iterate the current to find last element
       while(current.next ){
         current = current.next;
       }
       current.next = node;
     }

   this.size++;

  }

  insertElementAt(index, element){

    // check linked lsit has any element or not
    if(index >0 && index > this.size)
        return false;
    else{

      //create new node for the element
      var node = new Node(element);
      var cur, prev;
      cur =this.head;

      if(index === 0){
        node.next = head; // store curent head to new node next
        this.head = node;
      }
      else{
        cur =this.head;
        var it =0;

        //iterate to find the index
        while(it < index) {
          it++;
          prev= curr;
          curr = curr.next;
        }

         // adding an element
            node.next = curr;
            prev.next = node;
      }
      this.size++;
    }

  }

  removeFromIndex(index) {

    // check linked lsit has any element or not
    if(index >0 && index > this.size)
        return -1;
    else{
      var curr, prev, it =0;
      curr = this.head;
      prev = curr;

      if(index === 0 ) {
        this.head = curr.next;
      }
      else{
        //iterate to find the index to be removed
        while(it < index){
          it++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }

      this.size --;
      return curr.element;
    }
  }


  removeElement(element){

    var curr = this.head;
    var prev = curr;

    while(curr != null){

      //iterate and check for the element
      if(curr.element === element){
        if(prev == null){
          //then this is head node
          this.head = curr.next;
        }
        else{
          prev.next = curr.next;
        }
        this.size--;
        return curr.element;
      }
      prev=curr;
      curr = curr.next;
    }
    return -1;
  }

  isEmpty(){
    return this.size === 0;
  }

  size_of_list(){
    return this.size;
  }


  printList(){
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    return str;
  }
}

var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log('empty: '+ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
//ll.printList();

// returns 1
console.log('size:'+ll.size_of_list());

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
console.log(ll.printList());

console.log('size:'+ll.size_of_list());
