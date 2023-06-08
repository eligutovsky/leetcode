import { expect } from "../utils/expect";

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

var myCircularQueue = new MyCircularQueue(3);
expect(myCircularQueue.enQueue(1), true); // return True
expect(myCircularQueue.enQueue(2), true); // return True
expect(myCircularQueue.enQueue(3), true); // return True
expect(myCircularQueue.enQueue(4), false); // return False
expect(myCircularQueue.Rear(), 3); // return 3
expect(myCircularQueue.isFull(), true);  // return True
expect(myCircularQueue.deQueue(), true);  // return True
expect(myCircularQueue.enQueue(4), true); // return True
expect(myCircularQueue.Rear(), 4); // return 4