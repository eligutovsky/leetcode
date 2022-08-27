import { TrieNode } from "../typings/TrieNode";

class Trie {
  root = new TrieNode();
  constructor() {

  }

  insert(word: string): void {
    let node = this.root;
    for (let char of word) {
      if (!node.map.has(char)) {
        node.map.set(char, new TrieNode());
      }
      node = node.map.get(char)!;
    }
    node.word = word;
  }

  search(word: string): boolean {
    let node = this.root;
    for (let char of word) {
      if (!node.map.has(char)) {
        return false;
      }
      node = node.map.get(char)!;
    }
    return node.word === word;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (let char of prefix) {
      if (!node.map.has(char)) {
        return false;
      }
      node = node.map.get(char)!;
    }
    return true;
  }
}

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/