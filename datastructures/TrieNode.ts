export class TrieNode {
  map = new Map<string, TrieNode>()
  word?: string;
}