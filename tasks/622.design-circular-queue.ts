/*
 * @lc app=leetcode id=622 lang=typescript
 *
 * [622] Design Circular Queue
 */

// @lc code=start
class MyCircularQueue {
    queue: number[];
    readIndex: number;
    writeIndex: number;
    constructor(k: number) {
        this.queue = new Array(k);
        this.readIndex = 0;
        this.writeIndex = 0;
    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false;
        this.queue[this.writeIndex % this.queue.length] = value;
        this.writeIndex = this.writeIndex + 1;
        return true;
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false;
        this.queue[this.readIndex % this.queue.length] = null;
        this.readIndex = this.readIndex + 1;
        return true;
    }

    Front(): number {
        if (this.isEmpty()) return -1;
        return this.queue[this.readIndex % this.queue.length];
    }

    Rear(): number {
        if (this.isEmpty()) return -1;
        return this.queue[(this.writeIndex - 1) % this.queue.length];
    }

    isEmpty(): boolean {
        return (this.writeIndex - this.readIndex) === 0;
    }

    isFull(): boolean {
        return (this.queue.length - (this.writeIndex - this.readIndex)) === 0;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

