
var MyQueue = function() {  
    this.stack1 = [];
    this.stack2 = [];
};

// MyQueue.prototype.stack1 = [];
// MyQueue.prototype.stack2 = [];

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
   this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.stack1.length !== 1){
        this.stack2.push(this.stack1.pop());
    }
    number = this.stack1.pop();
    while(this.stack2.length !== 0){
        this.stack1.push(this.stack2.pop());
    }
    return number;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack1[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (this.stack1.length == 0);
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
