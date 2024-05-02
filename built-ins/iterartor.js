/**
 let arr = [1, 2, 3];
arr[Symbol.iterator] = function () {
  let index = 0;
  return {
    next: () => {
      if (index < this.length) {
        return { value: this[index++] * 2, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
};

let it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let n of arr) {
  console.log(n);
}
 */

//  quiz 2
let nums = [1, 2, 3, 4, 5];
nums[Symbol.iterator] = function () {
  let n = 0;
  return {
    next() {
      if (n >= nums.length) {
        return {
          done: true,
        };
      } else {
        return {
          value: nums[n++] ** 2,
          done: false,
        };
      }
    },
  };
};

for (let n of nums) {
  console.log(n);
}

class Sequence {
  constructor(start, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }

  [Symbol.iterator]() {
    let startIndex = this.start;

    return {
      next: () => {
        if (startIndex <= this.end) {
          return { value: (startIndex += this.interval), done: false };
        } else {
          return { done: true };
        }
      },
      return: () => {
        console.log("returning");
        return { done: true };
      },
    };
  }
}

let newS = new Sequence(2, 10, 3);

let evenNumbers = new Sequence(2, 10, 3);

for (const num of evenNumbers) {
  if (num > 7) {
    break;
  }
  console.log("num", num);
}
