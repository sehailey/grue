class ES6Item {
  constructor() {
    this.isInv = false;
  }
  take() {
    console.log("now taking es6item...");
    this.isInv = true;
    return this.isInv;
  }
}

function ES5Item() {
  this.isInv = false;
}

ES5Item.prototype.take = function() {
  console.log("now taking es5item...");
  this.isInv = true;
  return this.isInv;
};

var es5Item = new ES5Item();
const es6Item = new ES6Item();

const takeItem = itm => {
  return itm.take();
};

takeItem(es5Item);
takeItem(es6Item);
console.log(
  "es5Item:",
  es5Item, // false
  "es6Item:",
  es6Item // true
);

const es5Result = takeItem(es5Item);
const es6Result = takeItem(es6Item);
console.log(
  "es5Result: ",
  es5Result, //true
  "es6Result: ",
  es6Result //true
);
