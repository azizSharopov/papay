// K-task
// const foot = function (a, b, c) {
//   return a * 3 + b * 1 + c * 0;
// };
// console.log(foot(3, 4, 2));

const { indexInformation } = require("mongodb/lib/operations/db_ops");

// L task
// let a = 4;
// let b = 5;
// const calculate = "a*b";
// console.log(eval(calculate));

// class Member
class Member {
  #counts;
  went;
  constructor(a, b) {
    this.#counts = a;
    this.went = b;
  }
  addMember(a) {}
  removeMember(b) {}
  inform() {
    this.info = this.#counts - this.went;
    console.log(this.info);
  }
}

const myinfo = new Member(5, 2);
myinfo.inform();
