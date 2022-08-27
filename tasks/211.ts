class WordDictionary {
  map: Record<string, WordDictionary> = {};
  isWord: boolean = false;

  addWord(word: string): void {
    let node: WordDictionary = this;
    for (const char of word) {
      if (!node.map[char]) {
        node.map[char] =  new WordDictionary();
      }
      node = node.map[char];
    }
    node.isWord = true;
  }

  search(word: string, i = 0): boolean {
    let node: WordDictionary = this;
    for (;i < word.length; i++) {
      const char = word[i];
      if (char === '.') {
        for (const n in node.map) {
          if (node.map[n].search(word, i + 1)) {
            return true;
          }
        }
        return false;
      } else {
        node = node.map[char];
      }
    }
    return node?.isWord ?? false;
  }
}

// var obj = new WordDictionary()
// const toAdd = ["bad","dad","mad"];
// for (const word of toAdd) {
//   obj.addWord(word)
// }
// const toSearch = ["pad","bad",".ad","b.."];
// for (const word of toSearch) {
//   console.log(obj.search(word));
// }


var obj = new WordDictionary()
const toAdd = ["a","a"];
for (const word of toAdd) {
  obj.addWord(word)
}
const toSearch = [["."],["a"],["aa"],["a"],[".a"],["a."]].flatMap(str => str);
for (const word of toSearch) {
  console.log(obj.search(word));
}
// ["WordDictionary","addWord","addWord","search","search","search","search","search","search"]
// [[],["a"],["a"],["."],["a"],["aa"],["a"],[".a"],["a."]]