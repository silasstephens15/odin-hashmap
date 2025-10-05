class LinkedList {
  constructor(list) {
    let linkedList = { value: list[0] };
    this.head = linkedList;
    let item = linkedList;
    let total = 1;
    this.tail = item;
    for (let i = 1; i < list.length; i++) {
      this.append(list[i]);
      total++;
    }
    this.size = total;
  }
  Node(value) {
    return { value, next: null, previous: null };
  }
  append(value) {
    const item = this.Node(value);
    this.tail.next = item;
    item.previous = this.tail;
    this.tail = item;
    item.next = null;
  }
  prepend(value) {
    const item = this.Node(value);
    item.next = this.head;
    item.previous = null;
    this.head = item;
  }
  at(index) {
    let item = this.head;
    for (let i = 0; i < index; i++) {
      item = item.next;
    }
    return item;
  }
  pop() {
    this.tail = this.tail.previous;
    this.tail.next = null;
  }
  toString() {
    let item = this.head;
    let string = "";
    while (item.next !== null) {
      string += `(${item.value})->`;
      item = item.next;
    }
    string += `(${item.value})`;
    return string;
  }
  contains(value) {
    let item = this.head;
    do {
      if (item.value === value) {
        return true;
      }
      item = item.next;
    } while (item.next !== null);
    return false;
  }
  find(value) {
    let item = this.head;
    let i = 0;
    do {
      item = item.next;
      i++;
      if (item.value === value) {
        return i;
      } else {
      }
    } while (item.next !== null);
    return null;
  }
  insertAt(value, index) {
    let item = this.head;
    const insert = this.Node(value);
    for (let i = 0; i < index - 1; i++) {
      item = item.next;
    }
    insert.next = item.next;
    insert.previous = item;
    item.next = insert;
    insert.next.previous = insert;
  }
  removeAt(index) {
    let item = this.head;
    for (let i = 0; i < index - 1; i++) {
      item = item.next;
    }
    item.next = item.next.next;
  }
}

export default LinkedList;
