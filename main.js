import LinkedList from "./linked-list.js";
import murmur from "murmurhash-js/index.js";

class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = [];
    this.clear();
  }
  clear() {
    this.buckets = [];
    this.capacity = 16;
    for (let i = 0; i < this.capacity; i++) {
      this.buckets.push(new LinkedList());
    }
  }
  hash(key) {
    return murmur.murmur3(key);
  }
  set(key, value) {
    const list = this.buckets[this.hash(key) % this.capacity];
    if (list.key === key) {
      list.value = value;
    } else {
      list.append(key, value);
    }
    if (this.length / this.capacity > this.loadFactor) {
      this.expand();
    }
  }
  expand() {
    // this.capacity *= 2;
  }
  get(key) {
    return this.buckets[this.hash(key) % this.capacity].find(key);
  }
  has(key) {
    return this.buckets[this.hash(key) % this.capacity].contains(key);
  }
  get entries() {
    let entries = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let item = this.buckets[i].head;
      if (item !== undefined) {
        while (item !== null) {
          const keyValues = [item.key, item.value];
          entries.push(keyValues);
          item = item.next;
        }
      }
    }
    return entries;
  }
  get keys() {
    const entries = this.entries;
    let keys = [];
    for (let i = 0; i < entries.length; i++) {
      keys.push(entries[i][0]);
    }
    return keys;
  }
  get values() {
    const entries = this.entries;
    let values = [];
    for (let i = 0; i < entries.length; i++) {
      values.push(entries[i][1]);
    }
    return values;
  }
  get length() {
    let length = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      length += this.buckets[i].size;
    }
    return length;
  }
}

const map = new HashMap();
map.set("key", "test");
map.set("dog", "test");
map.set("test", "test");
map.set("cat", "test");
map.set("banana", "test");
map.set("apple", "test");
map.set("granola", "test");
map.set("shit", "test");
map.set("pineapple", "text");
map.set("pear", "text");
map.set("shirt", "text");
map.set("map", "text");
map.set("text", "text");
map.set("potato", "asd");
console.log(map.values);
