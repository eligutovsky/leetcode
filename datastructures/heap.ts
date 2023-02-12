interface IHeap<T> {
    insert(value: T): void;
    remove(): T;
    peek(): T;
    size(): number;
}

class MinHeap<T> implements IHeap<T> {
    private data: T[];
    private compare: (a: T, b: T) => number;
    constructor(compare: (a: T, b: T) => number) {
        this.data = [];
        this.compare = compare;
    }

    insert(value: T): void {
        this.data.push(value);
        this.bubbleUp(this.data.length - 1);
    }

    remove(): T {
        if (this.data.length === 0) {
            throw new Error("Heap is empty");
        }
        const result = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.bubbleDown(0);
        return result;
    }

    peek(): T {
        if (this.data.length === 0) {
            throw new Error("Heap is empty");
        }
        return this.data[0];
    }

    size(): number {
        return this.data.length;
    }

    private bubbleUp(index: number): void {
        if (index === 0) {
            return;
        }
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.compare(this.data[index], this.data[parentIndex]) < 0) {
            [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]];
            this.bubbleUp(parentIndex);
        }
    }

    private bubbleDown(index: number): void {
        const leftChildIndex = index * 2 + 1;
        const rightChildIndex = index * 2 + 2;
        if (leftChildIndex >= this.data.length) {
            return;
        }
        let minIndex = index;
        if (this.compare(this.data[leftChildIndex], this.data[minIndex]) < 0) {
            minIndex = leftChildIndex;
        }
        if (rightChildIndex < this.data.length && this.compare(this.data[rightChildIndex], this.data[minIndex]) < 0) {
            minIndex = rightChildIndex;
        }
        if (minIndex !== index) {
            [this.data[index], this.data[minIndex]] = [this.data[minIndex], this.data[index]];
            this.bubbleDown(minIndex);
        }
    }
}

class MaxHeap<T> implements IHeap<T> {
    private data: T[];
    private compare: (a: T, b: T) => number;
    constructor(compare: (a: T, b: T) => number) {
        this.data = [];
        this.compare = compare;
    }

    insert(value: T): void {
        this.data.push(value);
        this.bubbleUp(this.data.length - 1);
    }

    remove(): T {
        if (this.data.length === 0) {
            throw new Error("Heap is empty");
        }
        const result = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.bubbleDown(0);
        return result;
    }

    peek(): T {
        if (this.data.length === 0) {
            throw new Error("Heap is empty");
        }
        return this.data[0];
    }

    size(): number {
        return this.data.length;
    }

    private bubbleUp(index: number): void {
        if (index === 0) {
            return;
        }
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.compare(this.data[index], this.data[parentIndex]) > 0) {
            [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]];
            this.bubbleUp(parentIndex);
        }
    }

    private bubbleDown(index: number): void {
        const leftChildIndex = index * 2 + 1;
        const rightChildIndex = index * 2 + 2;
        if (leftChildIndex >= this.data.length) {
            return;
        }
        let maxIndex = index;
        if (this.compare(this.data[leftChildIndex], this.data[maxIndex]) > 0) {
            maxIndex = leftChildIndex;
        }
        if (rightChildIndex < this.data.length && this.compare(this.data[rightChildIndex], this.data[maxIndex]) > 0) {
            maxIndex = rightChildIndex;
        }
        if (maxIndex !== index) {
            [this.data[index], this.data[maxIndex]] = [this.data[maxIndex], this.data[index]];
            this.bubbleDown(maxIndex);
        }
    }
}





