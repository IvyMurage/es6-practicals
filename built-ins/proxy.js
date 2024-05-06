const books = {
  "Deep work": "Cal Newport",
  "Atomic Habits": "James Clear",
};
let proxy = new Proxy(books, {
  get: function (target, key) {
    console.log(`Fetching book ${key} by ${target[key]}`);
    return target[key];
  },
});

console.log(proxy["Deep work"]);

const data = {};

let newProxy = new Proxy(data, {
  set: function (target, key, value) {
    if (key === "current") {
      Reflect.set(target, key, value);
      return true;
    }
    return false;
  },
});

newProxy.current = 10;
newProxy.latest = 20;
console.log(newProxy.current);
console.log(newProxy.latest);

const richard = { status: "looking for work" };
const handler = {
  get(target, propName) {
    console.log(target); // the `richard` object, not `handler` and not `agent`
    console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
    return target[propName];
  },
};
const agent = new Proxy(richard, handler);
console.log(agent.status);

// delete method
const p = new Proxy(
  {},
  {
    deleteProperty(target, propName) {
      if (propName in target) {
        delete target[propName];
        console.log(`prop ${propName} deleted`);
        return true;
      }
      return false;
    },
  }
);

p.name = "John";
console.log(delete p.name);

// getting keys

const person = {
  name: "John",
  weight: 70,
  height: 180,
  age: 32,
};

let personProxy = new Proxy(person, {
  ownKeys(target) {
    return Reflect.ownKeys(target);
  },
});

console.log("gets the keys", Object.keys(personProxy));

function objValidator(obj) {
  return new Proxy(obj, {
    get(target, key) {
      if (key in target && typeof key === "string") {
        return target[key];
      } else {
        throw new Error("Invalid key");
      }
    },
  });
}
console.log(objValidator({ name: "John", age: 32 }));
let obj = objValidator({ name: "John", age: 32 });
console.log(obj.name);
console.log(obj.age);

const obj1 = {
  name: "Alice",
  age: 25,
};

function createLoggingProxy(obj) {
  return new Proxy(obj, {
    get(target, key) {
      console.log(`${key}: ${target[key]}`);
      return target[key];
    },
  });
}

const loggedObj = createLoggingProxy(obj1);

console.log(loggedObj.name); // Should log "name: Alice" and output "Alice"
console.log(loggedObj.age); // Should log "age: 25" and output 25
