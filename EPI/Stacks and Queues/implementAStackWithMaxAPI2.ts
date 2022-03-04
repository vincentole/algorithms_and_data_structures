class Stack {
    data: number[] = [];
    cache: { max: number; count: number }[] = [];

    push(value: number) {
        if (this.cache.length === 0 || this.max()! < value) {
            this.cache.push({ max: value, count: 1 });
        } else {
            this.cache[this.cache.length - 1].count++;
        }
        this.data.push(value);
        return this;
    }

    pop() {
        if (this.cache.length === 0) return null;
        if (this.cache[this.cache.length - 1].count <= 1) {
            this.cache.pop();
        } else {
            this.cache[this.cache.length - 1].count--;
        }
        return this.data.pop();
    }

    max() {
        if (this.cache.length === 0) return null;
        return this.cache[this.cache.length - 1].max;
    }
}

export default Stack;
