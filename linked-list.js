class LinkedList {
  constructor(list) {
    if (list === undefined) {
      this.size = 0;
      return;
    }
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
  Node(key, value) {
    return { key, value, next: null, previous: null };
  }
  append(key, value) {
    const item = this.Node(key, value);
    if (this.tail === undefined) {
      this.head = item;
      this.tail = item;
      this.size = 1;
      return;
    }
    this.tail.next = item;
    item.previous = this.tail;
    this.tail = item;
    item.next = null;
    this.size++;
  }
  prepend(key, value) {
    const item = this.Node(key, value);
    item.next = this.head;
    item.previous = null;
    this.head = item;
    this.size++;
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
    this.size--;
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
      if (item.key === value) {
        return true;
      }
      item = item.next;
    } while (item.next !== null);
    return false;
  }
  find(key) {
    let item = this.head;
    let i = 0;
    do {
      if (item.key === key) {
        return item.value;
      }
      item = item.next;
      i++;
    } while (item.next !== null);
    return null;
  }
  insertAt(key, value, index) {
    let item = this.head;
    const insert = this.Node(key, value);
    for (let i = 0; i < index - 1; i++) {
      item = item.next;
    }
    insert.next = item.next;
    insert.previous = item;
    item.next = insert;
    insert.next.previous = insert;
    this.size++;
  }
  removeAt(index) {
    let item = this.head;
    for (let i = 0; i < index - 1; i++) {
      item = item.next;
    }
    item.next = item.next.next;
    this.size--;
  }
}

export default LinkedList;
